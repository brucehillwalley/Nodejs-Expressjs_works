"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

require("express-async-errors");

const User = require("../models/user.model");
const passwordEncrypt = require("../helper/passwordEncrypt");

module.exports = {
  list: async (req, res) => {
    // const data = await User.find();
    const data = await res.getModelList(User);
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);
    const newdata = await User.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
      // güncel veriyi istiyorsan tekrar çağır
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    // console.log(data);
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email });
      if (user && user.password == passwordEncrypt(password)) {

        // SESSION
        req.session = {
          // email:user.email,
          id:user._id,
          password:user.password
        }

        // COOKIE
        if(req.body?.remindMe){
          req.session.remindMe = req.body.remindMe
            // SET maxAge
            req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7 // 1 hafta


        }

        res.status(200).send({
          error: false,
          message: "Login successful",
          user,
        });
      } else {
        res.sendStatus(401);
        throw new Error("Login parameters are incorrect");
      }
    }
  },
  logout: async (req, res) => {
    req.session= null
    res.status(200).send({
      error: false,
      message: "Logout successful",
    });
  },
};
