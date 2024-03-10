"use strict"
/*
    BLOG API with Mongoose
*/

const mongoose = require("mongoose");

// const nameSchema = new mongoose.Schema({fields},{tablo adı})
/*
const blogSchema = new mongoose.Schema(
    {
        //? _id: auto created and increment  
        // fieldName: Type // short form
        // fieldName: String,
        // fieldName2: BigInt,
        fieldName:{
            type:String,
            default: null,
            trim: true, // gelen veri trim eder
            unique: false, //true benzersiz kayıt olur
            select: true, // model çağrıldığında gelsin mi
            index: false, // true aramayı hızlandırır. her field true yapılmaz db yükü artar.
            required: true, // veri girişi ggerekli mi?
            required: [true, 'error message'], // veri girişi gerekli mi değil mi?, hata mesajı
            enum: [[1,2,3], 'error message'], // belirli bir paterne göre veri girişi
            validate: [function(data){return true}, 'error message'], // veriyi fonksiyon ile dogrulama
            get: function(data){return true}, // veriyi çağırırken çalışacak fonk
            set: function(data){return true}, // veriyi kaydederken çalışacak fonksion
        }
    },
    {
        collection: 'collectionName', // tablo adı
        timestamps: true, // olusturma ve güncelleme zamanı    
    })
    */