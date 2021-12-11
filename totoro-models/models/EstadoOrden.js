const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const estadoOrdenSchema = new Schema({
    codigo: {
      type: Number,
    },
    estado: {
        type: String,
        trim: true
    }
})
estadoOrdenSchema.plugin(AutoIncrement, { id: 'estadoOrdenSchema_counter', inc_field: 'codigo' });

module.exports =  estadoOrdenSchema;