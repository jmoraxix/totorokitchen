const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const consecutivoSchema = new Schema({
  codigo: {
      type: Number,
  },
  tipo: {
      type: String,
      trim: true,
      unique: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  valor: {
    type: Number,
    default: 1
  },
  contienePrefijo: {
    type: Boolean,
    default: false
  },
  prefijo: {
    type: String,
    trim: true,
    default: ''
  }
})
consecutivoSchema.plugin(AutoIncrement, { id: 'consecutivoSchema_counter', inc_field: 'codigo' });

module.exports = mongoose.model('ConsecutivoSchema', consecutivoSchema);