"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT2 = process.env?.PORT2 || 3000;

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});
//! aşağıdaki middleware a hata parametresi eklenmeli
// app.use((req,res,next)=>{
//     throw new Error("Something went wrong!");
// })

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    error: {
      message: err.message,
    },
  });
};
//* errorHandler middleware'i eklendi
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT2, () =>
  console.log(`server runned : http://localhost:${PORT2}`)
);
