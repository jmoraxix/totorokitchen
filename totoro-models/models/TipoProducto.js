const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const tipoProductoSchema = new Schema({
    codigo: {
      type: Number
    },
    tipo:{
        type:String,
        trim:true
    }
})
tipoProductoSchema.plugin(AutoIncrement, { id: 'tipoProductoSchema_counter', inc_field: 'codigo' });

module.exports = tipoProductoSchema;