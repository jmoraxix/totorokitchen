const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        unique: true
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

module.exports = mongoose.model('Rol', rolSchema);