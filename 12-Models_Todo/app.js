"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data: json veri kabul etmesi için
app.use(express.json())

require('express-async-errors')

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })

/* ------------------------------------------------------- */
// const {Sequelize, DataTypes} = require('sequelize')
// // sequlize instant oluşturulur

// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// // define methodu sequelize modeli olusturur:
// // her bir model, veritabaninda bir tabloya denk gelir.
// // sequelize.define('tableName',{modelDetails})

// const Todo=sequelize.define('todos',{
//     // sequlize otomatik olarak id olarak verilir
//     // anyFieldName:{
//     //     type:DataTypes.INTEGER,
//     //     allowNull:false, //default true
//     //     unique:true, //default: false
//     //     comment:'description',
//     //     primaryKey:true, //default: false
//     //     autoIncrement:true, //default: false
//     //     field:'custum_name',
//     //     defaultValue:'default', //default: null
//     // }

//     title:{
//         type:DataTypes.STRING,
//         allowNull:false,

//     },

//     description:DataTypes.TEXT,
//     priority:{
//         // -1:Low, 0:Normal, 1:High
//         type:DataTypes.TINYINT, 
//         allowNull:false,
//         defaultValue:0
//     },

//     isDone:{
//         type:DataTypes.BOOLEAN,
//         allowNull:false,
//         defaultValue:false
//     }

//     // id, createdAt ve updatedAt alanlarını sequelize otomatik olarak oluşturur

// })

// // Syncronition:

// // sequelize.sync() // CREATE TABLE IF NOT EXISTS (ONCE) ilk defa
// // sequelize.sync({force:true}) // DROP TABLE and CREATE TABLE (ONCE)
// // sequelize.sync({alter:true}) //TO BACK UP AND DROP TABLE and CREATE TABLE AND FROM BACKUP

// // cONNECT TO DATABASE:
// sequelize.authenticate()
// .then(() => console.log('Connection has been established successfully.'))
// .catch(()=> console.log('Unable to connect to the database:'))

/* ------------------------------------------------------- */
// Model Import
const Todo = require('./todo.model')
/* ------------------------------------------------------- */
// // ROUTES:
// const router=express.Router()

// router.get('/', async(req,res)=>{
//     const data = await Todo.findAndCountAll()
//     res.status(200).send({
//         error:false,
//         result:data
//     })
// })





// router.post('/', async(req,res)=>{

//     const receivedData = req.body
    
//     const data = await Todo.create({
//         title:receivedData.title,
//         description:receivedData.description,
//         priority:receivedData.priority,
//         isDone:receivedData.isDone,
    
//     })
//  console.log(data);


//     res.status(201).send({
//         error:false,
//         result:data.dataValues
//     })
// })

// // read todo:
// router.get('/:id', async(req,res)=>{
//     // const data = await Todo.findOne({
//     //     where:{
//     //         id:req.params.id
//     //     }        
//     // })

//     const data = await Todo.findByPk(req.params.id)

//     res.status(200).send({
//         error:false,
//         result:data
//     })
// })

// router.put('/:id', async(req,res)=>{
//     const data = await Todo.update(req.body,{
//         where:{
//             id:req.params.id
//         }
//     })
//     res.status(202).send({
//         error:false,
//         message:'updated',
//         body:req.body,
//         results:data,
//         new: await Todo.findByPk(req.params.id) // güncellenmiş datayı gösterir
//     })
// })

// router.delete('/:id', async(req,res)=>{
//     const data = await Todo.destroy({
//         where:{
//             id:req.params.id
//         }
//     })
//     // console.log(data);
// //? 204 No Content ==> ekrana çıktı vermeye bilir
//     // res.status(204).send({
//     //     error:false,
//     //     message:'deleted',
//     //     result:data
//     // })
//    if(data>0){
//     res.sendStatus(204)
//    }else{
//     // res.status(404).send({
//     //     error:true,
//     //     result:data
//     // })

//     res.errorStatusCode = 404
//     throw new Error('Not Found')
//    }
// })


// app.use(router)









/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));