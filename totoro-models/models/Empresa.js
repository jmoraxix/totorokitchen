const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const empresaSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        unique: true
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

module.exports = mongoose.model('Empresa',empresaSchema);