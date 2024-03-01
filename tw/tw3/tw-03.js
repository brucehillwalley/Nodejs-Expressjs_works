const express = require("express")
const app = express()
const router = express.Router()

const PORT =7542

// app.get("/", (req, res) => {
//     // res.send("200")
//     // res.status(202).send({message:"working go ahead"})
//     res.send(202,{
//         message:"buradayiz"
//     })
    
// }) //![a-z]   /^hello$/

app.use(router)

// router.route(/\/a[bc]d?/)  sinirlama yok
// router.route(/['abc', ‘acd’]/) sinirlama yok
// router.route(/\/abc|\/acd/)
// router.route(/\/a\d{1}c{2}|\/a\d{1}c{3}/)
// router.route(/\/a\d{3,}c{2}|\/a\d{3,}c{3}/)
// router.route(/\/a\D{3,5}c{2}|\/a\D{3,5}c{3}/)
// router.route(/^.*Hello$/)
// router.route(/Hello$/)
// router.route(/\/*Hello$/)
// router.route(/^\/Hello$/)
// router.route(/\/Hello$/)
// router.route(/^.Hello$/)
// .get((req, res) => res.send("get'te soru cozuldu"))
// .post((req, res) => res.send("post te soru cozuldu"))
// .put((req, res) => res.send("put te soru cozuldu"))
// .delete((req, res) => res.send("delete te soru cozuldu"))




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






// router.route("/:id")
// .get((req, res) => res.json({message: students}))
// .get((req, res) => res.send( students))
// .get((req, res) => {
// const studentId = req.params.id
// const studentId = req.params

// res.send(studentId)


// const studentId = Number(req.params.id)
// const requestedStudent = students.find(student => student.id === studentId )
// if(!requestedStudent){
//     res.send(404,"sorry")
// }else {
//     res.send(requestedStudent)
// }
// })


const myMiddleware = require("./middlewares/middlewares")
app.use(myMiddleware)

// app.get("/",(req, res) => res.send("garip")) //! app.get ile middleware'i test ettik



app.get("/",(req, res) => res.send("garip")) 

// router.route("/")
// .get((req, res) => {
// res.send("working well")
// })



// .post((req, res) => res.send("post te soru cozuldu"))
// .put((req, res) => res.send("put te soru cozuldu"))
// .delete((req, res) => res.send("delete te soru cozuldu"))



app.listen(PORT, () => console.log("devam edelim working!!!!"))

