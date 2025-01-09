import nodemailer from 'nodemailer'

export default defineEventHandler((event) => {
    // get text from event

    const queryProps = getQuery(event)

    console.log(queryProps.text)

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
    subject: "New Housemate Application Received: (" + queryProps.applicant + ')',
    text: "Dear Stacey and Derek,\n\n A new application has been received from: " + queryProps.applicant
         + "\n\n " + queryProps.text,
    attachments: [
        {
        filename: queryProps.applicant + " - Housemate Application.txt",
        content: queryProps.text, 
        },
    ],
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('a damn error.....')
        console.log(error)
    } else {
        console.log("Email sent: " + info.response)
    }
    })
  })