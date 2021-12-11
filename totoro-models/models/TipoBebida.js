const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const tipoBebidaSchema = new Schema({
    codigo: {
      type: Number
    },
    tipo: {
      type: String,
      trim: true
    }
})
tipoBebidaSchema.plugin(AutoIncrement, { id: 'tipoBebidaSchema_counter', inc_field: 'codigo' });

module.exports =tipoBebidaSchema;