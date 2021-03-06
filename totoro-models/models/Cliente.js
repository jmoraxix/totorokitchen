const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
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
    montoPagado: {
        type: Number
    },
    detalle: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    reservacion: {
        type: Boolean
    },
    barra: {
        type: Boolean
    }
})

module.exports = clientesSchema;