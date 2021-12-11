const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema= mongoose.Schema;

const empresaSchema = new Schema({
    codigo: {
      type: Number,
    },
    cedJuridica:{
        type:String,
        trim:true
    },
    nombre:{
        type:String,
        trim:true
    },
    detalle:{
        type:String,
        trim:true
    },
    telefono:{
        type:String,
        trim:true,
    },
    foto:{
        type:String
    }
})
empresaSchema.plugin(AutoIncrement, { id: 'empresaSchema_counter', inc_field: 'codigo' });

module.exports = empresaSchema;