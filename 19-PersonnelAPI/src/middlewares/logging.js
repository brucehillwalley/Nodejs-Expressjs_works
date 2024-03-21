"use strict"
/*-------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//* MORGAN LOGGER:
// https://expressjs.com/en/resources/middleware/morgan.html
// https://github.com/expressjs/morgan
// $ npm i morgan
const morgan = require('morgan')


const fs = require('node:fs')
const now = new Date()
const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`
// console.log(typeof now, now)
// const today = now.toISOString().split('T')[0]

// app.use(morgan('combined', {
//     stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
// }))
// console.log(typeof today, today)

module.exports=morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
})