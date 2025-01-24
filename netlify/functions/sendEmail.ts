require('dotenv').config()
import nodemailer from 'nodemailer'

export const handler = async (event) => {

    // get text from event
    const body = JSON.parse(event.body)

    console.log(body.applicant)
    console.log(body.text)

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
        to: process.env.GMAIL_USER,
        subject: "New Housemate Application Received: (" + body.applicant + ')',
        text: "Dear Stacey and Derek,\n\n A new application has been received from: " + body.applicant
             + "\n\n " + body.text,
        attachments: [
            {
            filename: body.applicant + " - Housemate Application.txt",
            content: body.text, 
            },
        ],
    }

    const info = await transporter.sendMail(mailOptions)

    return {
        statusCode: 200,
        body: JSON.stringify({ response: info}),
    }

}