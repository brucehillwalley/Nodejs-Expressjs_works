"use strict";

const mongoose = require("mongoose");

const PRIORITIES = {
  low: "low",
  medium: "medium",
  high: "high",
};

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    priority: {
      type: String,
      enum: {
        values: Object.values(PRIORITIES),
        message: "Priority must be low, medium or high.",
      },
      required: true,
      trim: true,
    },

    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "todo",
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
