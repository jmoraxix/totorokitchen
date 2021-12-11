const mongoose = require('mongoose');
const Empresa = require('./Empresa');
const Pais = require('./Pais');

const Schema = mongoose.Schema;

const marcaSchema = new Schema({
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
    descripcion: {
        type: String,
        trim: true
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        type: Empresa,
        default: {}
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais',
        type: Pais,
        default: {}
    }
})
module.exports = marcaSchema;