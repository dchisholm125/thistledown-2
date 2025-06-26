require('dotenv').config()

const client = require('twilio')(process.env.TWILIO_ACCOUNT, process.env.TWILIO_TOKEN);
import { RateLimiter } from './utils/rateLimiter'
import { sendAlertEmail } from './utils/email'

const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3
const limiter = new RateLimiter(RATE_LIMIT_WINDOW, MAX_REQUESTS_PER_WINDOW)

// Simple rate limiting - store recent requests in memory
const recentRequests = new Map()

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

  // Rate limit check
  if (!limiter.isAllowed(clientIP)) {
    // Send alert if threshold is hit
    if (limiter.getRequestCount(clientIP) === MAX_REQUESTS_PER_WINDOW) {
      sendAlertEmail({
        ip: clientIP,
        count: MAX_REQUESTS_PER_WINDOW,
        timestamps: limiter.getTimestamps(clientIP)
      })
    }
    return callback(null, {
      statusCode: 429,
      body: JSON.stringify({ error: 'Too many SMS requests. Please try again later.' })
    });
  }

  limiter.addRequest(clientIP)

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
