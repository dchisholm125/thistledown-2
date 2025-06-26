import nodemailer from 'nodemailer'

export async function sendEmail({
  to,
  subject,
  text,
  bcc
}: {
  to: string,
  subject: string,
  text: string,
  bcc?: string
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_TOKEN,
    },
  })
  return transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    text,
    bcc
  })
}

export async function sendAlertEmail({
  ip,
  count,
  timestamps
}: {
  ip: string,
  count: number,
  timestamps: number[]
}) {
  return sendEmail({
    to: 'dchisholm125@gmail.com',
    subject: `ALERT: High activity detected from IP ${ip}`,
    text: `More than ${count} requests from IP ${ip} in the last minute.\n\nTimestamps: ${timestamps.join(", ")}`
  })
}
