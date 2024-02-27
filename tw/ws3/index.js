"use strict";
//* 9. Write a middleware to log the incoming request method and URL to the console.

//*10. Write a function in Express.js that calculates the sum of two numbers passed as query parameters.

const express = require("express");
const app = express();
const PORT = 8000;

// //? middleware fonk üç parametre alır
// const middlewareFunc1 = (req, res, next) => {
//     console.log("middleware çalıştı.");
//     console.log(req.method, req.url);
//     console.log("*********10.soru************");
//     console.log(req.query.a, req.query.b);
//     const { a, b } = req.query;
//     const toplam = parseInt(a) + parseInt(b);
//     //   console.log(toplam);
//     req.toplam = toplam; //! bir middleware içersinde globalde değişken oluşturduk
//     next(); //! next middlewaree gececek mutlaka yazılmalı
//   };
//   const middlewareFunc2 = (req, res, next) => {
//     console.log("middleware2 çalıştı.");
//     console.log(req.toplam);
//     next();
//   };

const {middlewareFunc1, middlewareFunc2} = require("./middlewares");

app.use(middlewareFunc1, middlewareFunc2)
//* içerisinde middlewareler yazıldı



app.all("/", (req, res) => {
  const { toplam } = req;

  res.send({
    message: "welcome to express server1",
    toplam: toplam,
  });
});

app.get("/deneme", (req, res) => {
    res.send({
        message: "burası sum toplama sayfası",
        toplam: req.toplam,
      });
})


app.listen(PORT, () => {
  console.log(`server runned : ${PORT}`);
});
