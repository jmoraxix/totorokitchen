const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineaComestibleSchema = new Schema({
    id: {
        type: Number,
        trim: true,
        unique: true
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

module.exports = mongoose.model('LineaComestible', lineaComestibleSchema);