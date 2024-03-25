"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

// Token Model:

const tokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
        index: true
    },
    token:{
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    }
},{
    timestamps: true,
    collection: "tokens"
})

// Model:

module.exports =mongoose.model('Token', tokenSchema)