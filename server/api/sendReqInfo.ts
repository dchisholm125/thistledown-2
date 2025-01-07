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
                pass: "uyoe nimg ixnp gfvq",
            },
    })
    
    const mailOptions = {
    from: "dchisholm125@gmail.com",
    to: "dchisholm125@gmail.com",
    subject: "New Information Request Received: (" + queryProps.applicant + ')',
    text: "Dear Stacey and Derek,\n\n A new information request has been received from: \n" + queryProps.applicant
         + "\n\n He has reached out because: \n\n" + queryProps.text
         + "\n\nContact information is below: \n\n"
         + `Phone #: ${queryProps.phoneNum}\n`
         + `Email Address: ${queryProps.emailAddr}\n\n (sent via Derek C's gmail)`
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