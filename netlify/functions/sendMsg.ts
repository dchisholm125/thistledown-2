require('dotenv').config()

const client = require('twilio')(process.env.TWILIO_ACCOUNT, process.env.TWILIO_TOKEN);

// Simple rate limiting - store recent requests in memory
const recentRequests = new Map()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3 // Lower limit for SMS to prevent spam

exports.handler = function(event, context, callback) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return callback(null, { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method not allowed' })
    });
  }

  // Get client IP for rate limiting
  const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown'
  const now = Date.now()
  
  // Clean old entries
  for (const [ip, timestamps] of recentRequests.entries()) {
    recentRequests.set(ip, timestamps.filter(time => now - time < RATE_LIMIT_WINDOW))
    if (recentRequests.get(ip).length === 0) {
      recentRequests.delete(ip)
    }
  }
  
  // Check rate limit
  const clientRequests = recentRequests.get(clientIP) || []
  if (clientRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return callback(null, {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many SMS requests. Please try again later.' })
    });
  }
  
  // Add current request
  clientRequests.push(now)
  recentRequests.set(clientIP, clientRequests)

  try {
    const parsedBody = JSON.parse(event.body)
    
    // Basic validation
    if (!parsedBody.phoneNum || !parsedBody.msgBody) {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      });
    }

    Promise.all(
      // split the string of several messages into single numbers
      // send message to each of them
      parsedBody.phoneNum.split(';').map((num: string) => {
        return client.messages.create({
          from: "+18888285693",
          to: num,
          body: parsedBody.msgBody,
        });
      })
    )
      .then(() => callback(null, { statusCode: 200, body: 'Created' }))
      .catch((e: any) => {
        console.log(e);
        callback(e);
      });
  } catch (error) {
    console.error('SMS sending error:', error)
    callback(error);
  }
};
