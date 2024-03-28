"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require('../controllers/pizza')
const { isAdmin } = require('../middlewares/permissions')
/* ------------------------------------------------------- */
// UPLOAD:
// $ npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')
const upload = multer({ 
    //dest: 'uploads/' 
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})

/* ------------------------------------------------------- */

// URL: /pizzas

router.route('/')
    .get(pizza.list)
    // .post(isAdmin,upload.single('fileInputName') ,pizza.create)
    .post(isAdmin,upload.array('fileInputName') ,pizza.create)
    // .post(isAdmin,upload.any() ,pizza.create) // güvenli değil önerilmez


router.route('/:id')
    .get(pizza.read)
    .put(isAdmin, pizza.update)
    .patch(isAdmin, pizza.update)
    .delete(isAdmin, pizza.delete)

/* ------------------------------------------------------- */
module.exports = router