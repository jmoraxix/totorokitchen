const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemOrden = new Schema({
    platillo: {
        type: Schema.Types.ObjectId,
        ref: 'Platillo'
    },
    cantidad: {
        type: Number,
        default: 1
    }
})


const ordenSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    fechaEntrada: {
        type: Date,
        default: () => Date.now()
    },
    fechaSalida: {
        type: Date,
        trim: true
    },
    teniaReserva: {
        type: Boolean
    },
    activa: {
        type: Boolean,
        default: true
    },
    platillos: [itemOrden],
    mesa: {
        type: Schema.Types.ObjectId,
        ref: 'Mesas'
    }
})

module.exports =  ordenSchema;