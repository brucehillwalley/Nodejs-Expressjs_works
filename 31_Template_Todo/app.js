"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert object:
app.use(express.json())

//  Accept form-urlencoded and convert to object:
app.use(express.urlencoded({extended:true}))

// Catch async-errors:
require('express-async-errors')
/* ------------------------------------------------------- */
//* TEMPLATE-EJS:
// $ npm i ejs
// https://ejs.co/
// https://www.npmjs.com/package/ejs
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// console.log(app);
// Setting template engine:
//?view engine e ejs tanıttık
app.set("view engine", "ejs");

// default view folder: ./views/
app.set("views", "./public");

app.all('/',(req,res)=>{
    //API:
    // res.send({message:'hello'})
    // View Template:
    // call ejs file in ./views/ //public yeni views klasörü
    // res.render('index.ejs')
    res.render('index')
})


/* ------------------------------------------------------- */
// Routes:

app.use('/api', require('./app/routes/todo.router'))
app.use('/view', require('./app/routes/todo.view.router'))

/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require('./app/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));