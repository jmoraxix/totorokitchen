const mongoose = require('mongoose');
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
        ref: 'Orden'
    },
    clientes: {
        type: Schema.Types.ObjectId,
        ref: 'Clientes'
    },
    restaurantes: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurantes'
    }
})

module.exports =  facturasSchema;