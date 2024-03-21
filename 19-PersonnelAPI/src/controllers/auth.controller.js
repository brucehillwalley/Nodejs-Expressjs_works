"use strict";
/*-------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const Token = require("../models/token.model");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  // LOGIN & LOGOUT

  login: async (req, res) => {
    /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Login'
    #swagger.description = 'Login with username and password'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            username: 'testF0',
            password: '1234'
        }
    }


    */
    const { username, password } = req.body;
    
    if (username && password) {
      const user = await Personnel.findOne({ username, password });
      //? findOne passwordu, modeldeki set metodundaki encrypt i kullanarak db'de filtreleme yapar
      if (user && user.isActive) {
        /* SESSION */
        // // Set Session:
        // req.session = {
        //     id: user._id,
        //     password: user.password
        // }
        // // Set Cookie:
        // if (req.body?.rememberMe) {
        //     req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 Days
        // }

        /* SESSION */

        /* TOKEN */
        // const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
        //token var mı
        let tokenData = await Token.findOne({ userId: user._id });
        if (!tokenData) {
          const tokenKey = passwordEncrypt(user._id + Date.now());
          console.log(tokenKey);
          tokenData = await Token.create({ userId: user._id, token: tokenKey });
        }

        /* TOKEN */
        res.status(200).send({
          error: false,
          token: tokenData.token,
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong Username or Password.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please entry username and password.");
    }
  },

  

  logout: async (req, res) => {
  /*
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Logout'
    #swagger.description = 'Delete token'


    */



    /* SESSION */
    // Set session to null:
    req.session = null
    /* SESSION */

    /* TOKEN */

    //* 1. Yöntem (Kısa yöntem)
    //? Her kullanıcı için sadece 1 adet token var ise (tüm cihazlardan çıkış yap):

    // console.log(req.user)
    // await Token.deleteOne({ userId: req.user._id })

    //* 2. Yöntem:
    //? Her kullanıcı için 1'den fazla token var ise (çoklu cihaz):

    const auth = req.headers?.authorization || null // Token ...tokenKey...
    const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...']

    if (tokenKey && tokenKey[0]=='Token') {
        await Token.deleteOne({ token: tokenKey[1] })
    }

    /* TOKEN */

    res.status(200).send({
        error: false,
        // message: 'Logout: Sessions Deleted.',
        message: 'Logout: Token Deleted.'
    })
},
};
