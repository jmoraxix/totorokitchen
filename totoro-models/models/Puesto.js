const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puestosSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    nombre: {
        type: String,
        trim: true
    },
    rol: {
        type: String,
        trim: true
    },
    interno: {
        type: Boolean
    }
})

module.exports =  puestosSchema;