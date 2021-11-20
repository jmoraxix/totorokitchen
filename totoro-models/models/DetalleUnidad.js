const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detalleUnidadSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        unique: true
    },
    detalle: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('DetalleUnidad', detalleUnidadSchema);