const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claseBebidasSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        unique: true
    },
    nombre:{
        type:String,
        trim:true
    },
    resturante: {
        type: String,
        trim: true
    },
    ingredientes: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    nacionalidad: {
        type: String,
        trim: true
    },
    precioBotella: {
        type: String,
        trim: true
    },
    year: {
        type: String,
        trim: true
    }
})

module.exports = claseBebidasSchema;