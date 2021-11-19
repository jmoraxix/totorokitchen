const mongoose = require('mongoose');

const Pais = require('./models/Pais');
const Persona = require('./models/Persona');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:QRwAb1x0VruYHgwL@cltadriano.req5g.mongodb.net/restaurante?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    Pais: Pais,
    Persona: Persona
};