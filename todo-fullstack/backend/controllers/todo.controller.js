"use strict";
const Todo = require("../models/todo.model");
const mongoose = require("mongoose");
const CustomError = require("../errors/customError");

const todo = {
  list: async (req, res) => {
    const data = await Todo.find();
    res.status(200).send({
      isError: false,
      body: data,
    });
  },
  create: async (req, res) => {
    const data = await Todo.create(req.body);
    res.status(201).send({
      isError: false,
      body: data,
    });
  },
  read: async (req, res) => {
    const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
    // validation ı db ye bırakma id formatına uymuyorsa db yi yormaya gerek yok

    if (!idIsValid) throw new CustomError("Invalid ID", 400);
    const data = await Todo.findOne({ _id: req.params.id });
    res.status(200).send({
      isError: false,
      body: data,
    });
  },
  update: async (req, res) => {
    // const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
    // if (!idIsValid) throw new CustomError("id is not valid", 400);
    const data = await Todo.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    const updated = await Todo.findOne({ _id: req.params.id });
    res.status(202).send({ isError: false, data, body: updated });
  },
  delete: async (req, res) => {
    const data = await Todo.deleteOne({ _id: req.params.id });
    res.status(204).send({
      isError: false,
      body: data,
    });
  },
};

module.exports = todo;
