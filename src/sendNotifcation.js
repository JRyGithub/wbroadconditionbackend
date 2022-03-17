import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { google } from 'googleapis'
dotenv.config()

export const sendNotification = async(content) => {
  const CLIENT_EMAIL = process.env.USER_EMAIL;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = process.env.CLIENT_REDIRECT_URI;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
  const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
  );

  OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    // Generate the accessToken on the fly
    const accessToken = await OAuth2Client.getAccessToken();

   // Create the email envelope (transport)
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: CLIENT_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // Create the email options and body 
    // ('email': user's email and 'name': is the e-book the user wants to receive)
    const mailOptions = {
      from: `${CLIENT_EMAIL}`,
      to: `wbroadcondition_ca@outlook.com`,
      subject: `World Bank Road Condition Website - Feedback`,
      html: content,
    };

    // Set up the email options and delivering it
    const result = await transport.sendMail(mailOptions);
    return result;

  } catch (error) {
    return error;
  }
}