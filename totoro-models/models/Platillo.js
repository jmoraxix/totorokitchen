const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const platilloSchema = new Schema({
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
    precio: {
        type: Number
    },
    foto: {
        type: String,
        trim: true
    },
    ingredientes: {
        type: String,
        trim: true
    },
    detalle: {
        type: String,
        trim: true
    },
    year: {
        type: Number
    },
    precioBotella: {
        type: Number
    },
    unidadMedida: {
        type: Schema.Types.ObjectId,
        ref: 'UnidadMedida'
    },
    tipoComida: {
        type: Schema.Types.ObjectId,
        ref: 'TipoComida'
    },
    tipoPlatillo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoPlatillo'
    },
    tipoBebida: {
        type: Schema.Types.ObjectId,
        ref: 'TipoBebida'
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais'
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca'
    }
})
module.exports = platilloSchema;