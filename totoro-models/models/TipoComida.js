const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const tipoComidaSchema = new Schema({
    codigo: {
      type: Number
    },
    tipo:{
        type:String,
        trim:true
    }
})
tipoComidaSchema.plugin(AutoIncrement, { id: 'tipoComidaSchema_counter', inc_field: 'codigo' });

module.exports = mongoose.model('TipoComida', tipoComidaSchema);