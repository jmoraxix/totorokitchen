const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detalleUnidadSchema = new Schema({
    id: {
        type: Int32Array,
        trim: true,
        unique: true
    },
    detalle: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('DetalleUnidad', detalleUnidadSchema);