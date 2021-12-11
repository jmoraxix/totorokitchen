const mongoose = require('mongoose');
const Orden  = require('./Orden.');
const Clientes = require('./Clientes');
const Restaurantes = require('./Restaurantes');
const Schema = mongoose.Schema;

const unidadMedidaSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    unidad: {
        type: String,
        trim: true
    },
    simbolo: {
        type: String,
        trim: true
    },
    simbologia: {
        type: String,
        trim: true
    },
    detalleUnidad: {
        type: detalleUnidad,
        default: {}
    }
})

module.exports = mongoose.model('UnidadMedida', unidadMedidaSchema);