const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoComidaSchema = new Schema({
    id: {
        type: Int32Array,
        trim: true,
        unique: true
    },
    tipo:{
        type:String,
        trim:true
    }
})

module.exports = mongoose.model('TipoComida', tipoComidaSchema);