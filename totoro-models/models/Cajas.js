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
        type: Number
    }
    ,
    abierta: {
        type: Boolean
    }
})
cajasSchema.plugin(AutoIncrement, { id: 'cajasSchema_counter', inc_field: 'codigo' });

module.exports = cajasSchema;