import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const sendNotification = async(content) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.USER_EMAIL,
          pass: process.env.PASSWORD,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
        }
    });
    const mailOptions = {
        from: `ryweb.solutions@gmail.com`,
        to: `mona.mon.mo@hotmail.com`,
        subject: 'World Bank Road Condition Website - Feedback',
        text: content
      };
  const info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId)
  return info.messageId
}