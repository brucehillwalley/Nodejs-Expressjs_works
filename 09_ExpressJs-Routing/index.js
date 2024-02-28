"use strict";
/*
    Expressjs Routing
*/

//? expressjs micro framework tür. nodejs üzerine yazılmıştır.

require("dotenv").config();
//

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

const express = require("express");

//? express çalıştırarak server oluşturulur
const app = express();

// app.get("/", (req, res) => {
//   res.send({
//     //* json formatında gonderir
//     message: "welcome to expressjs server",
//   });

//! res.send("<h1>welcome to expressjs server</h1>") ikinci send çallışömaz
// });

// app.post("/", (req, res) => {res.send({"message": "post hello", })  });
// app.put("/", (req, res) => {res.send({"message": "update hello", })  });
// app.delete("/", (req, res) => {res.send({"message": "delete hello", })  });

// app.get("/drive1/drive2", (req, res) => {res.send({"message": "drive2 GET method hello", })  });

//* JOKER CHARRACTERS PATH
// app.get("/ab?cd", (req, res) => {
//   res.send('ab?cd');
// });

//! regex / / arasına yazaılır
//* regexr.com

// app.get('/abc/', (req, res) => {
//     res.send('ab?cd');
//   });

//* URL PARAMETERS

// app.get("/:blogId/location/:location", (req, res) => {
//   //     res.send({ params: req.params,
//   //     blogId: req.params.blogId,
//   // });

//   res.send({
//     blogId: req.params.blogId,
//     url: {
//       protocol: req.protocol,
//       domain: req.hostname,
//       method: req.method,
//       params: req.params,
//       path: req.path,
    
//     },
//   });
// });


// app.get("/:userId[\\d]+", (req, res) => {
// app.get("/:userId[0-9]", (req, res) => {
// app.get("/:userId[\\D]+", (req, res) => {
// app.get("/:userId-:username", (req, res) => {

   
  
//     res.send({
//       blogId: req.params.blogId,
//       url: {
//         protocol: req.protocol,
//         domain: req.hostname,
//         method: req.method,
//         params: req.params,
//         path: req.path,
//         body:req.body
      
//       },
//     });
//   });

//* STATUS CODES
// app.get("/", (req, res) => {

// res.status(200).send({
//         'message': 'ok',
//         'code': 200
//     })

// })

// app.post("/", (req, res) => {res.status(201).send({"message": "post hello", })  });
// app.put("/", (req, res) => {res.status(202).send({"message": "update hello", })  });
// app.delete("/", (req, res) => {res.status(202).send({"message": "delete hello", })  });

// //REDIRECT
// app.get("/", (req, res) => {
// res.redirect(301, "https://www.google.com")
// // res.redirect(302, "/about")


//     // res.status(201).send({"message": "post hello", })  

// });

app.get("/file", (req, res) => {

    res.sendFile(__dirname+"/read.md")
    // res.redirect(301, "https://www.google.com")
  
    
    });


app.listen(PORT, HOST, () =>
  console.log(`server run : http://${HOST}:${PORT}`)
);
