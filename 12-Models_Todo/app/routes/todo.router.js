"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// ROUTERS:
const todo = require('../controllers/todo.controller')

const router = require('express').Router();

// //List:
// router.get('/', todo.list)

// //Create:
// router.post('/',todo.create)
// //REAd:
// router.get('/:id',todo.read)
// //Update:
// router.put('/:id',todo.update)
// //Delete:
// router.delete('/:id',todo.delete)

//? url'si ortak olanları aynı route da toplayalım
router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .patch(todo.update) //? put ile aynı controller
    .delete(todo.delete)





module.exports = router