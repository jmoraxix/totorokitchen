const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mesasSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    numero: {
        type: Number
    },
    nombre: {
        type: String,
        trim: true
    },
    cantSillas: {
        type: Number
    },
    restaurante: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurante'
    }
})

module.exports =  mesasSchema;