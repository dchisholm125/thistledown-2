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
                user: "dchisholm125@gmail.com",
                pass: process.env.GMAIL_TOKEN,
            },
    })
    
    const mailOptions = {
        from: "dchisholm125@gmail.com",
        to: "dchisholm125@gmail.com",
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

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('a damn error.....')
            console.log(error)
            return { statusCode: 500, message: error}
        } else {
            console.log("Email sent: " + info.response)
            return { statusCode: 200,  message: "email sent" + info.response }
        }
    })

    return { statusCode: 200,  message: "email sent" }

}