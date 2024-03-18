"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
const Personnel  = require('../controllers/personnel.controller')
/* ------------------------------------------------------- */
// URL: /departments
router.route('/').get(Personnel.list).post(Personnel.create)

// URL: /departments/:id
router.route('/:id').get(Personnel.read).put(Personnel.update).patch(Personnel.update).delete(Personnel.delete)


/* ------------------------------------------------------- */
module.exports = router