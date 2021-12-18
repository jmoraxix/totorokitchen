const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
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
    cantidad: {
        type: Number
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca'
    },
    unidadMedida: {
        type: Schema.Types.ObjectId,
        ref: 'UnidadMedida'
    },
    tipoComestible: {
        type: Schema.Types.ObjectId,
        ref: 'TipoComestible'
    },
    tipoProducto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProducto'
    },
    lineaComestible: {
        type: Schema.Types.ObjectId,
        ref: 'LineaComestible'
    },
    claseComestible: {
        type: Schema.Types.ObjectId,
        ref: 'ClaseComestible'
    },
    restaurante: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurante'
    }
})

module.exports =  productoSchema;