"use strict"
/*
    BLOG API with Mongoose
*/

// $ npm i dotenv nodemon express express-async-errors mongoose
const express = require("express");
const app= express();


app.use(express.json()) 
//! yukarıda olmalı! yeri önemli. request den gelen veriyi json formatına dönüştürür veya json ı dataya dönüştürür.


require("dotenv").config(); // dotenv dosyasından process.env ye aktarır
//echo PORT=8000 > .env

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";
//* db connection process.env yi görmesi için bu satırda kullandık
require("./src/dbConnection")


app.all("*",(req,res)=>res.send("Welcome to blog api with mongoose"))

app.use(require('./src/errorHandler')) //aşağıda kalmalı

app.listen(PORT,()=>console.log(`Server Running on : http://${HOST}:${PORT}`))
