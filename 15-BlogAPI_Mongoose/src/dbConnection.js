"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API with Mongoose
------------------------------------------------------- */
const MONGODB = process.env.MONGODB || "mongodb://127.0.0.1:27017/blogAPI";

const mongoose = require("mongoose");
mongoose.connect(MONGODB)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Failed", err));
