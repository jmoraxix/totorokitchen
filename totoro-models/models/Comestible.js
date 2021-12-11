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
        type: Schema.Types.ObjectId,
        ref: 'TipoComestible',
        type: TipoComestible,
        default: {}
    },
    lineaComestible: {
        type: Schema.Types.ObjectId,
        ref: 'LineaComestible',
        type: LineaComestible,
        default: {}
    },
    claseComestibleSchema: {
        type: Schema.Types.ObjectId,
        ref: 'ClaseComestible',
        type: ClaseComestible,
        default: {}
    },
    unidadMedida: {
        type: Schema.Types.ObjectId,
        ref: 'UnidadMedida',
        type: UnidadMedida,
        default: {}
    }
})

module.exports = comestibleSchema;