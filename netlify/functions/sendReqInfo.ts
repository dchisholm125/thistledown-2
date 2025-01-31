require('dotenv').config()
import nodemailer from 'nodemailer'

export const handler = async (event) => {

    // get text from event
    const parsedBody = JSON.parse(event.body)

    console.log(parsedBody.text)

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
    to: "info@thistledownrecoveryhome.com; derek.leclerc@gmail.com;",
    subject: "New Information Request Received: (" + parsedBody.applicant + ')',
    text: "Dear Stacey and Derek,\n\n A new information request has been received from: \n" + parsedBody.applicant
         + "\n\n He has reached out because: \n\n" + parsedBody.text
         + "\n\nContact information is below: \n\n"
         + `Phone #: ${parsedBody.phoneNum}\n`
         + `Email Address: ${parsedBody.emailAddr}\n\n (sent via Derek C's gmail)`
    }
    
    const info = await transporter.sendMail(mailOptions)

    return {
        statusCode: 200,
        body: JSON.stringify({ response: info}),
    }
}