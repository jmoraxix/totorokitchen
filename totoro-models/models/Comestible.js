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
        ref: 'TipoComestible'
        
    },
    lineaComestible: {
        type: Schema.Types.ObjectId,
        ref: 'LineaComestible'
    },
    claseComestibleSchema: {
        type: Schema.Types.ObjectId,
        ref: 'ClaseComestible'
    },
    unidadMedida: {
        type: Schema.Types.ObjectId,
        ref: 'UnidadMedida'
    }
})

module.exports = comestibleSchema;