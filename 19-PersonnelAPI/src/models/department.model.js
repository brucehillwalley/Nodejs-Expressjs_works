"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const DepartmentSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            trim: true,
            unique: true,
            required: true

        }
    
    },{
        collection: 'department',
        timestamps: true
    })

module.exports = mongoose.model('Department', DepartmentSchema)