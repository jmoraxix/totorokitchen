const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bitacoraSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    fecha: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    detalle: {
        type: String,
        trim: true
    },
    entradaDinero: {
        type: Number
    },
    caja: {
      type: Schema.Types.ObjectId,
      ref: 'Caja'
    },
    evento: {
      type: Schema.Types.ObjectId,
      ref: 'Evento'
    }
})

module.exports = bitacoraSchema;