const mongoose = require('mongoose');
const DetalleUnidad = require('./DetalleUnidad');
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
        type: Schema.Types.ObjectId,
        ref: 'DetalleUnidad',
        type: DetalleUnidad,
        default: {}
    }
})

module.exports = unidadMedidaSchema;