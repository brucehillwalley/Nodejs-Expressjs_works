"use strict"
const express = require("express");
const todoRouter = express.Router();
const todo = require("../controllers/todo.controller");
const idValidation = require("../middlewares/idValidation");

// app.use("*", idValidation);

todoRouter.route("/")
    .get(todo.list)
    .post(todo.create)

todoRouter.route("/:id")
    .all(idValidation)
    .get(todo.read)
    .put(todo.update)
    .patch(todo.update)
    .delete(todo.delete)

module.exports = todoRouter