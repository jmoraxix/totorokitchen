const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const lineaComestibleSchema = new Schema({
    codigo: {
      type: Number
    },
    nombre:{
        type:String,
        trim:true
    },
    descripcion: {
        type: String,
        trim: true
    }
})
lineaComestibleSchema.plugin(AutoIncrement, { id: 'lineaComestibleSchema_counter', inc_field: 'codigo' });

module.exports =  lineaComestibleSchema;