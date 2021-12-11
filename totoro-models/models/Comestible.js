const mongoose = require('mongoose');
const { tipoComestibleSchema } = require('./TipoComestible');
const { lineaComestibleSchema } = require('./LineaComestible');
const { claseComestibleSchema } = require('./ClaseComestible');
const { UnidadMedida } = require('./UnidadMedida');
const Schema = mongoose.Schema;

const comestibleSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    tipoComestible: {
        type: tipoComestibleSchema,
        default: {}
    },
    lineaComestible: {
        type: lineaComestibleSchema,
        default: {}
    },
    claseComestibleSchema: {
        type: claseComestibleSchema,
        default: {}
    },
    unidadMedida: {
        type: UnidadMedida,
        default: {}
    }
})

module.exports = comestibleSchema;