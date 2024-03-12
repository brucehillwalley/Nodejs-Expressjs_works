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
      default: PRIORITIES.medium,
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

todoSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    // ret.createdAt = ret.createdAt.toLocaleString("tr-tr");
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
