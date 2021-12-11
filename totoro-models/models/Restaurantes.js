const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantesSchema = new Schema({
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
    direccion: {
        type: String,
        trim: true
    },
    aforo: {
        type: Number
    },
    telefono: {
        type: String,
        trim: true
    },
    activo: {
        type: Boolean
    }
})

module.exports = mongoose.model('Restaurantes', restaurantesSchema);