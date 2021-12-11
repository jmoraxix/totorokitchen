const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const personaSchema = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    apellidos:{
        type:String,
        trim:true
    },correo:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true
    },
    celular:{
        type:String,
        trim:true
    }
})

module.exports = personaSchema;