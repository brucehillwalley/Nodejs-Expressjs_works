'use strict';


//? middleware fonk üç parametre alır
const middlewareFunc1 = (req, res, next) => {
    console.log("middleware çalıştı.");
    console.log(req.method, req.url);
    console.log("*********10.soru************");
    console.log(req.query.a, req.query.b);
    const { a, b } = req.query;
    const toplam = parseInt(a) + parseInt(b);
    //   console.log(toplam);
    req.toplam = toplam; //! bir middleware içersinde globalde değişken oluşturduk
    next(); //! next middlewaree gececek mutlaka yazılmalı
  };
  const middlewareFunc2 = (req, res, next) => {
    console.log("middleware2 çalıştı.");
    console.log(req.toplam);
    next();
  };

  module.exports = {
    middlewareFunc1,
    middlewareFunc2
  }