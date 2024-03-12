"use strict";

const express = require("express");
const todoRouter = require("./routes/todo.route");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
}))
app.use(express.json());
require("dotenv").config();

app.use(todoRouter);
require("./startup/mongooseConnection")();
app.use(require("./middlewares/errorHandler"));
app.listen(8000, () =>
  console.log("Server Running on : http://127.0.0.1:8000")
);
