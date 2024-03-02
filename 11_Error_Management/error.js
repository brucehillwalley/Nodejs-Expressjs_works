"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// app.get("/", (req, res) => {
//   throw new Error("Something went wrong!");
// });
// app.get("/user/:id", (req, res) => {
//   const id = req.params.id || 0;

//   try{
//     if (isNaN(id)) {
//         throw new Error("id must be a number", { cause: "params.id" + id });
//       }else{
//         res.send({
//             message:"ok",
//             id:id
//         })
//       }
//   }catch(err){


        // // next içinde bir hata objesi gönderirsek, errorHanler yakalar.
        // next(err)
//     res.send({
//         error:true,
//         message:err.message,
//     })

//   }



// });

/* ------------------------------------------------------- */


app.get("/*", (req, res) => {
    //! ilk önce status code a bakılır hata mesajına değil
    //*res ile gönderme standartdır. req de kullanılabilirdi.
    res.errorStatusCode=404
    throw new Error("Something went wrong!");
})









/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
//* ERROR HANDLER

//? errorHandler middleware'i eklendi. errorHandler en son root tur.
const errorHandler = (err, req, res, next) => {

    console.log("errorHandler calisti.");

    const  errorStatusCode=res?.errorStatusCode || 500

    res.status(errorStatusCode).send({
        error:true,
        message:err.message,
        cause:err.cause,
        stack:err.stack
    })
}


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
