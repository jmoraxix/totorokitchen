const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const tipoPlatilloSchema = new Schema({
    codigo: {
      type: Number
    },
    tipo: {
      type: String,
      trim: true
    }
})
tipoPlatilloSchema.plugin(AutoIncrement, { id: 'tipoPlatilloSchema_counter', inc_field: 'codigo' });

module.exports =tipoPlatilloSchema;