const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marcaSchema = new Schema({
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
    descripcion: {
        type: String,
        trim: true
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    },
    pais: {
        type: Schema.Types.ObjectId,
        ref: 'Pais'
    }
})
module.exports = marcaSchema;