const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proveedoresSchema = new Schema({
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
    telefono: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    },
    fechaIngreso: {
        type: String,
        trim: true
    },
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    },
    restaurante: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurante'
    }
})

module.exports =  proveedoresSchema;