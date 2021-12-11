const mongoose = require('mongoose');
const Restaurantes = require('./Restaurantes');
const Schema = mongoose.Schema;

const mesasSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    numero: {
        type: Number
    },
    nombre: {
        type: String,
        trim: true
    },
    cantSillas: {
        type: Number
    },
    restaurantes: {
        type: Restaurantes,
        default: {}
    }
})

module.exports = mongoose.model('Mesas', mesasSchema);