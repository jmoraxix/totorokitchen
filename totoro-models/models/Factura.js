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
        type: Date,
        default: () => Date.now()
    },
    total: {
        type: Number
    },
    orden: {
        type: Schema.Types.ObjectId,
        ref: 'Orden'
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    restaurante: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurante'
    }
})

module.exports =  facturasSchema;