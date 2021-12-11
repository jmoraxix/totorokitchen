const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const eventoSchema = new Schema({
    codigo: {
      type: Number,
    },
    tipo: {
        type: String,
        trim: true
    }
})
eventoSchema.plugin(AutoIncrement, { id: 'eventoSchema_counter', inc_field: 'codigo' });

module.exports =  eventoSchema;