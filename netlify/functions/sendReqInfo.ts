require('dotenv').config()
import { RateLimiter } from './utils/rateLimiter'
import { sendAlertEmail, sendEmail } from './utils/email'

const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5
const limiter = new RateLimiter(RATE_LIMIT_WINDOW, MAX_REQUESTS_PER_WINDOW)

export const handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        }
    }

    // Get client IP for rate limiting
    const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown'

    // Rate limit check
    if (!limiter.isAllowed(clientIP)) {
        // Send alert if threshold is hit
        if (limiter.getRequestCount(clientIP) === MAX_REQUESTS_PER_WINDOW) {
            await sendAlertEmail({
                ip: clientIP,
                count: MAX_REQUESTS_PER_WINDOW,
                timestamps: limiter.getTimestamps(clientIP)
            })
        }
        return {
            statusCode: 429,
            body: JSON.stringify({ error: 'Too many requests. Please try again later.' })
        }
    }

    // Add current request
    limiter.addRequest(clientIP)

    try {
        // get text from event
        const parsedBody = JSON.parse(event.body)

        console.log(parsedBody.text)

        // Basic validation
        if (!parsedBody.applicant || !parsedBody.text) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            }
        }

        const info = await sendEmail({
            to: "info@thistledownrecoveryhome.com, derek.leclerc@gmail.com",
            bcc: "dchisholm125@gmail.com",
            subject: "New Information Request Received: (" + parsedBody.applicant + ')',
            text: "Dear Stacey and Derek,\n\n A new information request has been received from: \n" + parsedBody.applicant
                + "\n\n He has reached out because: \n\n" + parsedBody.text
                + "\n\nContact information is below: \n\n"
                + `Phone #: ${parsedBody.phoneNum}\n`
                + `Email Address: ${parsedBody.emailAddr}\n\n (sent via thistledownrecoveryhome543@gmail.com)`
        })

        return {
            statusCode: 200,
            body: JSON.stringify({ response: info}),
        }
    } catch (error) {
        console.error('Email sending error:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        }
    }
}