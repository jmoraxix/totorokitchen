const mongoose = require('mongoose');
const Orden  = require('./Orden.');
const Clientes = require('./Clientes');
const Restaurantes = require('./Restaurantes');
const Schema = mongoose.Schema;

const facturasSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    fecha: {
        type: String,
        trim: true
    },
    total: {
        type: Number
    },
    orden: {
        type: Schema.Types.ObjectId,
        ref: 'Orden',
        type: Orden,
        default: {}
    },
    clientes: {
        type: Schema.Types.ObjectId,
        ref: 'Clientes',
        type: Clientes,
        default: {}
    },
    restaurantes: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurantes',
        type: Restaurantes,
        default: {}
    }
})

module.exports =  facturasSchema;