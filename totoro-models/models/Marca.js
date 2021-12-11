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
        type: Empresa,
        default: {}
    },
    pais: {
        type: Pais,
        default: {}
    }
})

module.exports = mongoose.model('Marca', marcaSchema);