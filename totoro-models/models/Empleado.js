const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadosSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    cedula: {
        type: String,
        trim: true
    },
    nombre: {
        type: String,
        trim: true
    },
    primerApellido: {
        type: String,
        trim: true
    },
    segundoApellido: {
        type: String,
        trim: true
    },
    telefono1: {
        type: String,
        trim: true
    },
    telefono2: {
        type: String,
        trim: true
    },
    nacionalidad: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    },
    restaurante: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurante'
    },
    puesto: {
        type: Schema.Types.ObjectId,
        ref: 'Puesto'
    }
})

module.exports = empleadosSchema;