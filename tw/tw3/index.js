"use strict";

const express = require("express");
const app = express();
const router = express();

require("dotenv").config();
const POST = process.env?.PORT || 8000;

//| Write a router that matches /abc or /acd path.

// router.get("/\abc|\/acd", (req, res) => {
//     res.send("<h1>path matched</h1")
// })

//| Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or
// router.get(/\/a\d{1}c{2}|\/a\d{1}c{3}/, (req, res) => {
//     res.send("path matched");
//    })

//| Routes that must end with string "Hello" and can have any no. of any character before that

// router.get(/\/Hello$/, (req, res) =>{
//     res.send('<h1>Route Fourth</h1>')
//    })

// Regular expression to match routes ending with "Hello"
// const helloRegex = /\/Hello$/;

// router.get(helloRegex, (req, res) => {
//     res.send("<h1>Route Fourth</h1>");
// })

//| Matching routes must end with the string "Hello" and must not have any characters before that.
// const helloRegex = /^\/Hello$/;
// router.get(helloRegex,(req, res) =>{
//     res.send("<h1>Route Fourth</h1>");
// })

//| I have an object with student information. Code the desired routers.
//| Returns all students in json format with the get method
//| returns information about the requested student in json format
//| If there is any missing/error in the code, please correct it.

const students = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Steve",
  },
];

router.get("/students", (req, res) => {
  res.send(students);
});

router.get("/students/:id", (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const student = students.find((student) => student.id == parseInt(id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "student not found" });
  }
});

router.get("/", (req, res) => {
  res.send("Welcome to the student API!");
});

app.use(router);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.status || 500).json({ message: "Internal Server Error" });
});

//   1. Amaç:

//   Uygulamada oluşabilecek beklenmedik hatalara karşı bir güvenlik ağı oluşturarak, sunucunun çökmesini veya kullanıcıya anlaşılmaz hata mesajları gönderilmesini engellemek.
//   2. Mekanizma:

//   Express.js'deki 'middleware' özelliğini kullanarak, tüm rotalardan önce çalışan bir hata yakalama mekanizması oluşturulur.
//   3. Çalışma Şekli:

//   Bir hata oluştuğunda, bu middleware otomatik olarak tetiklenir ve aşağıdaki işlemleri gerçekleştirir:

//   Hata Ayrıntılarını Günlüğe Kaydetme: console.error(err.stack) bölümü, hata ile ilgili ayrıntılı bilgileri konsola yazdırarak, hata ayıklama ve çözümleme sürecine yardımcı olur.
//   Kullanıcıya Bilgilendirme: res.status(err.status || 500).json({ message: 'Internal Server Error' }) bölümü, hatanın durumuna uygun bir HTTP durum kodu (500 veya hata nesnesinin .status özelliğinde belirtilen kod) ve genel bir "Internal Server Error" mesajı döndürerek kullanıcıyı bilgilendirir.
//   4. Opsiyonellik:

//   Bu middleware zorunlu olmayıp, kodun işlevselliğini etkilemez. Ancak hata yönetimi ve kullanıcı deneyimi açısından eklenmesi tavsiye edilir.
//   5. Önem:

//   Hata işleme, gerçek dünya uygulamalarında karşılaşılabilecek sorunlara karşı esneklik ve dayanıklılık sağlar.
//   Kullanıcılara anlamlı hata mesajları sunarak, uygulamanın güvenilirliğini ve kullanıcı deneyimini olumlu yönde etkiler.


app.listen(POST, () => console.log("server runned : http://127.0.0.1:8000"));
