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
    to: "derek.leclerc@gmail.com",
    subject: "(TESTING!) New Housemate Application Received",
    text: "Hey Derek! This is a TEST email, sent dynamically via your new Thistledown website. The attached .txt file should be a summary of the"
         + " applicant's form (not as pretty as the website though, sorry. I\'ll be working on making it prettier though!",
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