"use strict";


const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();







require("./startup/mongooseConnection")();
app.use(require('./middlewares/errorHandler'));
app.listen(8000, () => console.log("Server Running on : http://127.0.0.1:8000"));