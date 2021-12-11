const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const rolSchema = new Schema({
    codigo: {
      type: Number
    },
    nombre:{
        type:String,
        trim:true
    },
    interno:{
        type:Boolean,
        trim:true
    },
    descripcion: {
        type: String,
        trim: true
    }
})
rolSchema.plugin(AutoIncrement, { id: 'rolSchema_counter', inc_field: 'codigo' });

module.exports = mongoose.model('Rol', rolSchema);