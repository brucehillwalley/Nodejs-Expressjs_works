"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm i jsonwebtoken
    $ npm i nodemailer multer
    $ nodemon
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Accept URL-encoded:
app.use(express.urlencoded({ extended: true }))

// Logger:
app.use(require('./src/middlewares/logger'))

// Auhentication:
app.use(require('./src/middlewares/authentication'))

// findSearchSortPage / res.getModelList:
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
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

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.GMAILSERVICE_USER,
//         pass: process.env.GMAILSERVICE_KEY
//     }
// })

// transporter.sendMail({
//     from: 'brucehillwalley@gmail.com',
//     to: 'brucehillwalley@gmail.com',
//     subject: 'Hello ✔',
//     text: 'Hello world?',
//     html: '<b>Hello world?</b> <p>how are you?</p>'
// }, (err, success) => {
//     success ? console.log('SUCCESS',success) : console.log(err);
// })


/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use('/', require('./src/routes/'))

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        docs: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
        user: req.user,
    })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.