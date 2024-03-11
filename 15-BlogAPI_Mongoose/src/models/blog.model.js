"use strict";
/*
    BLOG API with Mongoose
*/

const mongoose = require("mongoose");

// BLOG CATEGORY:
const blogCategorySchema = new mongoose.Schema(
  {
    //? _id gerek yok otomotik oluşturulur.
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategory",
    timestamps: true,
  }
);

// BLOG POST:

const blogPostSchema = new mongoose.Schema(
  {
    //? _id gerek yok otomotik oluşturulur.
    blogCategoryId: {
      type: mongoose.Schema.Types.ObjectId, // ForeignKey, RelationalID
      ref: "BlogCategory", // BlogCategory Modelinden bir referans alır.ismi aynı olmalı
      required: true,
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
        type: Boolean,
        default: true
    }
    // createdAt, // otomatik oluşturulur
    //  updatedAt, // otomatik oluşturulur
  },
  {
    collection: "blogPost",
    timestamps: true,
  }
);

//? model mongoose.model("model adı", hangi şema)
//   const BlogPostModel =  mongoose.model("BlogPost", blogPostSchema)
//   module.exports={
//     BlogPost: BlogPostModel
//   }

module.exports = {
  BlogCategory: mongoose.model("BlogCategory", blogCategorySchema),
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};

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
            get: function(data){return data}, // veriyi çağırırken çalışacak fonk
            set: function(data){return data}, // veriyi kaydederken çalışacak fonksion
        }
    },
    {
        collection: 'collectionName', // tablo adı
        timestamps: true, // olusturma ve güncelleme zamanı    
    })
    */
