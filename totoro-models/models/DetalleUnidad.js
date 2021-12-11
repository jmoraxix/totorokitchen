const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const detalleUnidadSchema = new Schema({
    codigo: {
        type: Number,
    },
    detalle: {
        type: String,
        trim: true
    }
})
detalleUnidadSchema.plugin(AutoIncrement, { id: 'detalleUnidadSchema_counter', inc_field: 'codigo' });

module.exports = mongoose.model('DetalleUnidad', detalleUnidadSchema);