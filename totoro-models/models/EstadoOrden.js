const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estadoOrdenSchema = new Schema({
    id: {
        type: Int32Array,
        trim: true,
        unique: true
    },
    estado: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('EstadoOrden', estadoOrdenSchema);