"use strict";

const mongoose = require("mongoose");

const mongooseConnection = async () => {
  try {

    
    await mongoose.connect("mongodb://127.0.0.1:27017/todos");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    throw new Error("MongoDB Connection Failed", error);
  }
};

module.exports = mongooseConnection;