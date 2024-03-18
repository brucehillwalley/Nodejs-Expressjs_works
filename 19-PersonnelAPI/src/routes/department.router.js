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
router.route('/:id').get(Department.read).put(Department.update).patch(Department.update).delete(Department.delete)

router.route('/:id/personnels', Department.personnels)
/* ------------------------------------------------------- */
module.exports = router