const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const claseComestibleSchema = new Schema({
    codigo: {
        type: Number,
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
claseComestibleSchema.plugin(AutoIncrement, { id: 'claseComestibleSchema_counter', inc_field: 'codigo' });

module.exports = mongoose.model('ClaseComestible', claseComestibleSchema);