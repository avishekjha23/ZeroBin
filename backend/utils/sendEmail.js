const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, text }) => {
  // Log environment variables for debugging
  console.log('Email config:', {
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    user: process.env.MAILTRAP_USER,
    passExists: !!process.env.MAILTRAP_PASS
  });

  // Ensure the transporter is properly created with environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: '"Support" <noreply@mailtrap.io>',  // Valid sender address (Mailtrap's domain for testing)
      to,
      subject,
      text
    });
    console.log('Email sent successfully');
  } catch (error) {
    // Handle errors if any during the sending process
    console.error('Error sending email:', error);
    throw error; // Re-throw the error so the calling function can handle it
  }
};

module.exports = sendEmail;