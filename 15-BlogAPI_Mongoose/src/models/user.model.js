"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const mongoose = require("mongoose");

// // Password Encryption:
// const cyrpto = require("node:crypto");

// const keyCode = process.env.KEY || "secretwrite_random_key";
// const loopCount = 10_000; //10000
// const charCount = 32; // write 32 for 64
// const encType = "sha512"; // şifreleme algoritması

// const passwordEncrypt = function (password) {
//   return cyrpto
//     .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
//     .toString("hex");
// };

const passwordEncrypt = require("../helper/passwordEncrypt");

// Schema:
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      // unique: [true, 'Email must be unique.'], // Not support
      // required: true,
      required: [true, "Email must be required."],
      // validate: (email) => { return true },
      // validate: [
      //     (email) => {
      //         if (email.includes('@') && email.includes('.')) {
      //             return true
      //         }
      //         return false
      //     },
      //     'Email type is incorrect'
      // ],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is incorrect",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      // set: (password) => { return password + '123' },
      // set: function (password){ return password + '123' },
      
        set: passwordEncrypt,
    },

    firstName: String,

    lastName: String,
  },
  {
    collection: "user",
    timestamps: true,
  }
);

// module.exports = {
//     User: mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model("User", UserSchema);
