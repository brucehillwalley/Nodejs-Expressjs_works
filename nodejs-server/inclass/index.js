"use strict";

//?  NodeJs SERVER
// console.log("welcome");

require("dotenv").config(); //! verileri dotenv dosyasından process env ye aktarrır
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

const http = require("node:http"); //* built in module server için gereklli moodul
const app = http.createServer((req, res) => {
  // console.log(req);
  // console.log("**********************");
  // console.log(req.method);
  // console.log("**********************");
  // console.log(req.url);

  // end points home: /, list: /list, test: /test
  /*
  if (req.url == "/") {
    res.end("<h1>home page</>");
  } else if (req.url == "/list") {
    res.end("<h1>list page</>");
  } else if (req.url == "/test") {
    res.end("<h1>test page</>");
  }
*/

  /*
if (req.url == "/") {
  res.write('this ')
  res.write('is ')
  res.write('home ')
  res.write('page ')
  res.end();
} else if (req.url == "/list") {
  res.end("<h1>list page</>");
} else if (req.url == "/test") {
  res.end("<h1>test page</>");
}
*/

  if (req.url == "/") {
  

    if (req.method == "GET") { //* default GET
    res.write("this "); 
    res.write("is ");
    res.write("home ");
    res.write("page ");
      res.end();
    } else if (req.method == "POST") {
      res.statusCode = 400; //* default 200
      res.statusMessage="post yapamazsin"
      res.end("can not use this method");
    } else if (req.method == "DELETE") {
      res.writeHead(405,"silme yapamazsin",{
        "Content-Type":"text/html",
        "another-header":"another content"
      })

      res.end("can not use this method");
    }

    res.end();
  } else if (req.url == "/list") {
    const obj={
      "error":false,
      "message":"this is list page",
      "deneme:":"deneme"
    }
    res.end(JSON.stringify(obj));
  } else if (req.url == "/test") {
    res.end("<h1>test page</>");
  }

  // res.end("<h1>WELCOME TO NODEJS SERVER</>"); //*  yazmassak sayfa loading te kalır
});

app.listen(8000, () => console.log(`server runned : http://${HOST}:${PORT}`));
