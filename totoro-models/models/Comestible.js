const mongoose = require('mongoose');
const TipoComestible = require('./TipoComestible');
const LineaComestible = require('./LineaComestible');
const ClaseComestible = require('./ClaseComestible');
const UnidadMedida = require('./UnidadMedida');
const Schema = mongoose.Schema;

const comestibleSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    tipoComestible: {
        type: TipoComestible,
        default: {}
    },
    lineaComestible: {
        type: LineaComestible,
        default: {}
    },
    claseComestible: {
        type: ClaseComestible,
        default: {}
    },
    unidadMedida: {
        type: UnidadMedida,
        default: {}
    }
})

module.exports = mongoose.model('Comestible', comestibleSchema);