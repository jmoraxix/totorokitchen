const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const cajasSchema = new Schema({
    codigo: {
        type: Number
    },
    descripcion:{
        type:String,
        trim:true
    },
    dinero: {
        type: Number,
        default: 0
    },
    abierta: {
        type: Boolean
    },
    restaurante: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurante'
    }
})
cajasSchema.plugin(AutoIncrement, { id: 'cajasSchema_counter', inc_field: 'codigo' });

module.exports = cajasSchema;