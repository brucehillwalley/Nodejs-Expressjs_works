"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert object: // json veri kabul etmesi icin
app.use(express.json());

require("express-async-errors");

const errorHandler= require('./app/errorHandler')

//? router import
const router=require('./app/routes/todo.router')
app.use(router)



app.use(errorHandler);

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
