"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

// Password Encryption:
const crypto = require("node:crypto");

const keyCode = process.env.KEY || "secretwrite_random_key";
const loopCount = 10_000; //10000
const charCount = 32; // write 32 for 64
const encType = "sha512"; // şifreleme algoritması

module.exports = function (password) {
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
};