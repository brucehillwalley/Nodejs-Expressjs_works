"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// DATA RECEIVED FROM REQUEST BODY
//? ACCEPT JSON DATA
// app.use(express.json())
// //? ACCEPT TEXT DATA
// app.use(express.text())
// //? ACCEPT FORM DATA
// app.use(express.urlencoded({extended:true}))

//* allow static files
app.use('/static', express.static('./public/images/'))



app.get('/',(req,res)=>{

    
    res.send({
        body:req.body,
        message:"hello"
    })
})
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
