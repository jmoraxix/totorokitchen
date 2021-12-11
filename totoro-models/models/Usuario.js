const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    usuario: {
        type: String,
        trim: true
    },
    contrasena: {
        type: String,
        trim: true
    },
    activo: {
        type: Boolean
    },
    empleados: {
        type: Schema.Types.ObjectId,
        ref: 'Empleados'
    }
})
module.exports = usuarioSchema;