"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
const Department  = require('../controllers/department.controller')
/* ------------------------------------------------------- */
// URL: /departments
router.route('/').get(Department.list).post(Department.create)

// URL: /departments/:id
router.route('/:id').get(Department.get).put(Department.update).patch(Department.update).delete(Department.delete)


/* ------------------------------------------------------- */
module.exports = router