"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const {Sequelize, DataTypes} = require('sequelize')
// sequlize instant oluşturulur

const sequelize = new Sequelize('sqlite:./db.sqlite3')
// define methodu sequelize modeli olusturur:
// her bir model, veritabaninda bir tabloya denk gelir.
// sequelize.define('tableName',{modelDetails})

const Todo=sequelize.define('todos',{
    // sequlize otomatik olarak id olarak verilir
    // anyFieldName:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false, //default true
    //     unique:true, //default: false
    //     comment:'description',
    //     primaryKey:true, //default: false
    //     autoIncrement:true, //default: false
    //     field:'custum_name',
    //     defaultValue:'default', //default: null
    // }

    title:{
        type:DataTypes.STRING,
        allowNull:false,

    },

    description:DataTypes.TEXT,
    priority:{
        // -1:Low, 0:Normal, 1:High
        type:DataTypes.TINYINT, 
        allowNull:false,
        defaultValue:0
    },

    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }

    // id, createdAt ve updatedAt alanlarını sequelize otomatik olarak oluşturur

})

// Syncronition:

// sequelize.sync() // CREATE TABLE IF NOT EXISTS (ONCE) ilk defa
// sequelize.sync({force:true}) // DROP TABLE and CREATE TABLE (ONCE)
// sequelize.sync({alter:true}) //TO BACK UP AND DROP TABLE and CREATE TABLE AND FROM BACKUP

// cONNECT TO DATABASE:
sequelize.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(()=> console.log('Unable to connect to the database:'))

module.exports=Todo