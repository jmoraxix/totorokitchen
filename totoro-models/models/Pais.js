const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paisSchema = new Schema({
    codigo: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true
    },
    pais: {
        type: String
    },
    bandera: {
        type: String
    }
})

module.exports = paisSchema;