// // nodemailer
// const nodeMail = require('nodemailer');

// async function mainMail(name, email, subject, message) {
//   const transporter = await nodeMail.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.PASSWORD,
//     },
//   });
//   console.log('apple');
//   const mailOption = {
//     from: process.env.GMAIL_USER,
//     to: email,
//     subject: subject,
//     html: `You got a message from
//       Email : ${email}
//       Name: ${name}
//       Message: ${message}`,
//   };
//   try {
//     await transporter.sendMail(mailOption);
//     return Promise.resolve('Message Sent Successfully!');
//   } catch (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// }

// module.exports = mainMail;
