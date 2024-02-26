"use strict";

//?  NodeJs SERVER
// console.log("welcome");

require("dotenv").config(); //! verileri dotenv dosyasından process env ye aktarrır
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";
// npm i express
const express = require("express"); //* node modules ün içinden import edilir
const app = express();

console.log("express server");
app.get('/', (req,res)=>{
    res.send("<h1 style='color:red'>express deneme</h1> ")
})

app.listen(8000, () => console.log(`server runned : http://${HOST}:${PORT}`));
