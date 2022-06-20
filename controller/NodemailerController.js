// const { models } = require('mongoose');

// // nodemailer
// async function mainMail(name, email, subject, message) {
//   const transporter = await nodeMail.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.PASSWORD,
//     },
//   });
//   const mailOption = {
//     from: process.env.GMAIL_USER,
//     to: process.env.EMAIL,
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

// const nodemailer = require('nodemailer');

// async function sendEmail(email) {
//   let testAccount = await nodemailer.createTestAccount();

//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"PawDoption" <ttechtwee@gmail.com>', // sender address
//     to: email, // list of receivers
//     subject: 'Contact succeeded!', // Subject line
//     text: 'We will contact you' + email + 'blabla', // plain text body
//     html:
//       '<b>Welcome to Pawdoption' +
//       email +
//       'Find your PawBuddy on our platform!</b>', // html body
//   });

//   console.log('Message sent: %s', info.messageId);
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// }

// module.exports = {
//   sendEmail: sendEmail,
// };
