require('dotenv').config()
import nodemailer from 'nodemailer'

// Simple rate limiting - store recent requests in memory
const recentRequests = new Map()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5

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
        return {
            statusCode: 429,
            body: JSON.stringify({ error: 'Too many requests. Please try again later.' })
        }
    }
    
    // Add current request
    clientRequests.push(now)
    recentRequests.set(clientIP, clientRequests)

    // ALERT: If more than 5 requests in the window, send an alert email
    if (clientRequests.length === MAX_REQUESTS_PER_WINDOW) {
        try {
            const alertTransporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_TOKEN,
                },
            })
            await alertTransporter.sendMail({
                from: process.env.GMAIL_USER,
                to: "dchisholm125@gmail.com",
                subject: `ALERT: High activity detected from IP ${clientIP}`,
                text: `More than ${MAX_REQUESTS_PER_WINDOW} requests from IP ${clientIP} in the last minute.\n\nTimestamps: ${clientRequests.join(", ")}`
            })
        } catch (e) {
            console.error('Failed to send alert email:', e)
        }
    }

    try {
        // get text from event
        const parsedBody = JSON.parse(event.body)

        console.log(parsedBody.applicant)
        console.log(parsedBody.text)

        // Basic validation
        if (!parsedBody.applicant || !parsedBody.text) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            }
        }

        const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // upgrade later with STARTTLS
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_TOKEN,
                },
        })
        
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: "info@thistledownrecoveryhome.com, derek.leclerc@gmail.com",
            bcc: "dchisholm125@gmail.com",
            subject: "New Housemate Application Received: (" + parsedBody.applicant + ')',
            text: "Dear Stacey and Derek,\n\n A new application has been received from: " + parsedBody.applicant
                 + "\n\n " + parsedBody.text,
            attachments: [
                {
                filename: parsedBody.applicant + " - Housemate Application.txt",
                content: parsedBody.text, 
                },
            ],
        }

        const info = await transporter.sendMail(mailOptions)

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