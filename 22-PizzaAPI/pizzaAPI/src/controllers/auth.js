"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Auth Controller:

const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "aA?123456",
                }
            }
        */

    const { username, email, password } = req.body;

    if ((username || email) && password) {
      const user = await User.findOne({ $or: [{ username }, { email }] });

      if (user && user.password == passwordEncrypt(password)) {
        if (user.isActive) {
          /* SIMPLE TOKEN */

          let tokenData = await Token.findOne({ userId: user.id });

          if (!tokenData)
            tokenData = await Token.create({
              userId: user.id,
              token: passwordEncrypt(user.id + Date.now()),
            });

          /* SIMPLE TOKEN */

          /* JWT TOKEN */
          // const accessInfo = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

          // const refreshInfo = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1y' })
          const accessInfo = {
            key: process.env.ACCESS_KEY,
            time: process.env.ACCESS_EXP || '30m',
            data: {
              _id: user._id, // farklı yerlerde farlı çağırdık
              id: user.id,
              username: user.username,
              email: user.email,
              password: user.password,
              isAdmin: user.isAdmin,
              isActive: user.isActive,
            },
          };

          const refreshInfo = {
            key: process.env.REFRESH_KEY,

            time: process.env.REFRESH_EXP || '3d',
            data: {
              id: user.id,
              password: user.password, // encrypted password
            },
          };

          // jwt.sign(data,secret_key,expires_in:"30m")
          const accessToken = jwt.sign(accessInfo.data, accessInfo.key, {
            expiresIn: accessInfo.time,
          });

          const refreshToken = jwt.sign(refreshInfo.data, refreshInfo.key, {
            expiresIn: refreshInfo.time,
          });

          /* JWT TOKEN */

          res.status(200).send({
            error: false,
            token: tokenData.token,
            bearer: {
              access: accessToken,
              refresh: refreshToken,
            },
            user,
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("This account is not active.");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong username/email or password.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter username/email and password.");
    }
  },

  refresh: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "JWT: Refresh"
            #swagger.description = 'Refresh token.'
        */
    const refreshToken = req.body?.bearer?.refresh;
    if (refreshToken) {
      const refreshData = await jwt.verify(
        refreshToken,
        process.env.REFRESH_KEY
      );
      // console.log(refreshData);
      if (refreshData) {
        const user = await User.findOne({ _id: refreshData.id });

        if (user && user.password == refreshData.password) {
          res.status(200).send({
            error: false,
            bearer: {
              access: jwt.sign(user.toJSON(), process.env.ACCESS_KEY, {
                expiresIn: process.env.ACCESS_EXP || '30m',
              }),
            },
          });
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("JWT: Refresh: Wrong refresh token.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter bearer.refresh");
    }
  },

  logout: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "simpleToken: Logout"
            #swagger.description = 'Delete token key.'
        */

    const auth = req.headers?.authorization; // Token ...tokenKey...
    const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']
   

    if (tokenKey[0] == "Token") {
      const result = await Token.deleteOne({ token: tokenKey[1] });
      res.send({
        error: false,
        message: "Token deleted. Logout was OK.",
        result,
      });
    } else {
      res.send({
        error: false,
        message: "JWT: No need any process for logout.",
      });
    }
  },
};
