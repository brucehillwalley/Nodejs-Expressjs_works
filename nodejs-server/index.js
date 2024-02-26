"use strict";

//?  NodeJs SERVER
// console.log("welcome");

require("dotenv").config(); //! process env ye aktarrır
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";


// const http = require("node:http"); //* built in module


// // http.createServer((param1,param2)=>{ //! request, response

// // })

// http
//   .createServer((req, res) => {
//     res.end("<h1>WELCOME TO NODEJS SERVER</>");
//   })

//   .listen(8000, () => console.log(`server runned : http://${HOST}:${PORT}`));
//   .listen(8000, () => console.log("server runned : http://127.0.0.1:8000"));

const http = require("node:http"); //* built in module
const app = http.createServer((req, res) => {
  res.end("<h1>WELCOME TO NODEJS SERVER</>");
});

app.listen(8000, () => console.log(`server runned : http://${HOST}:${PORT}`));
