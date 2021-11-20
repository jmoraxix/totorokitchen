const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoProductoSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        unique: true
    },
    tipo:{
        type:String,
        trim:true
    }
})

module.exports = mongoose.model('TipoProducto', tipoProductoSchema);