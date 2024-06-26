"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// ROUTERS:

const todo = require('../controllers/todo.view.controller')

const router = require('express').Router()

//! TEMPLATE DE GEÇERLİ DEĞİL
// router.route('/')
//     .get(todo.list)
//     .post(todo.create)

// router.route('/:id')
//     .get(todo.read)
//     .put(todo.update)
//     .patch(todo.update)
//     .delete(todo.delete)

router.all('/', todo.list)

// router.get('/create', todo.create)
// router.post('/create', todo.create)
// tarayıcıdan get post isteği gelir ayrı ayrı yazmaktansa all yazılır
router.all('/create', todo.create)

router.all('/:id', todo.read)

router.all('/:id/update', todo.update)

router.all('/:id/delete', todo.delete)


module.exports = router