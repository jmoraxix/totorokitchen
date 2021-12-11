const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const tipoComestibleSchema = new Schema({
    codigo: {
      type: Number
    },
    nombre: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
})
tipoComestibleSchema.plugin(AutoIncrement, { id: 'tipoComestibleSchema_counter', inc_field: 'codigo' });

module.exports = tipoComestibleSchema;