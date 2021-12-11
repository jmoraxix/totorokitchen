const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordenSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    fechaEntrada: {
        type: String,
        trim: true
    },
    fechaSalida: {
        type: String,
        trim: true
    },
    teniaReserva: {
        type: Boolean
    },
    estadoOrden: {
        type: Schema.Types.ObjectId,
        ref: 'EstadoOrden'
    },
    platillos: {
        type: Schema.Types.ObjectId,
        ref: 'Platillos'
    },
    mesas: {
        type: Schema.Types.ObjectId,
        ref: 'Mesas'
    }
})

module.exports =  ordenSchema;