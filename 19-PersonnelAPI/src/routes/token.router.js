"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const token = require('../controllers/token.controller')
// const permissions = require('../middlewares/permissions')

// URL: /tokens

// router.route('/')
//     .get(permissions.isAdmin,token.list)
//     .post(permissions.isAdmin,token.create)

// router.route('/:id')
//     .get(permissions.isAdmin,token.read)
//     .put(permissions.isAdmin,token.update)
//     .patch(permissions.isAdmin,token.update)
//     .delete(permissions.isAdmin,token.delete)


// router.use(permissions.isAdmin)
const {isAdmin}=require('../middlewares/permissions')
router.use(isAdmin)

router.route('/')
    .get(token.list)
    .post(token.create)

router.route('/:id')
    .get(token.read)
    .put(token.update)
    .patch(token.update)
    .delete(token.delete)

/* ------------------------------------------------------- */
module.exports = router