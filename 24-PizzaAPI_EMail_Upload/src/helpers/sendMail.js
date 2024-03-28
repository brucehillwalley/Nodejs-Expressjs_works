"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

// sendMail(mailOptions:object):

const nodemailer = require("nodemailer");

module.exports = function (to, subject, message) {

//*EMAIL
// https://www.nodemailer.com/
// https://www.npmjs.com/package/nodemailer
// https://ethereal.email/

// const nodemailer = require('nodemailer')

// Create TEst account:
// nodemailer.createTestAccount().then((account) => {
//     console.log(account);
// })

/*
{
    user: 'kedtqxnv7nzni4lz@ethereal.email',
    pass: 'PTRgpkB9KMyYs33kRH',
    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
    web: 'https://ethereal.email'
  }
*/

// const transporter = nodemailer.createTransport({
//      SMTP:
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, //SSL , TSL olabilir
//     auth: {
//         user: 'kedtqxnv7nzni4lz@ethereal.email',
//         pass: 'PTRgpkB9KMyYs33kRH',
//     }

// })

// console.log(transporter);
// transporter:  email server' a bağlı mail göndernmeye hazır nesne

//  SendMail: GERÇEKTE MAIL GÖNDERMEYECEK TEST İÇİN
// transporter.sendMail({
//     from: 'kedtqxnv7nzni4lz@ethereal.email',
//     to: 'brucehillwalley@gmail.com',
//     subject: 'Hello ✔',
//     text: 'Hello world?',
//     html: '<b>Hello world?</b> <p>how are you?</p>'
    
// }, (err, success) => {
//     success ? console.log('SUCCESS',success) : console.log(err);
    
// })

// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })

//* gmail
//* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAILSERVICE_USER,
        pass: process.env.GMAILSERVICE_KEY
    }
})

transporter.sendMail({
    from: 'brucehillwalley@gmail.com',
    to: to, //'brucehillwalley@gmail.com',
    subject: subject,//'Hello ✔',
    text: message, //'Hello world?',
    html: '<b>Hello world?</b> <p>how are you?</p>'
}, (err, success) => {
    success ? console.log('SUCCESS',success) : console.log(err);
})

};
