"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Token = require("../models/token");
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization; // Token ...tokenKey...
  const tokenKey = auth ? auth.split(" ") : null;

  if (tokenKey) {

    if (tokenKey[0] == "Token") {
      // Simple Token

      const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
        "userId"
      );
      req.user = tokenData ? tokenData.userId : null;
    }else if (tokenKey[0] == "Bearer") {
      // JWT AccessToken
      jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (err, accessData) => {
        if(accessData){
          console.log('JWT Verify: YES');
          req.user = accessData;
        } else {
          console.log('JWT Verify: NO');
          req.user=false
          // throw new Error('') // burada hata vememeli sistem durmamalı
        }
      })

    }
  }

  next();
};
