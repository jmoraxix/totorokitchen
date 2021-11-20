const mongoose = require('mongoose');

const ClaseComestible = require('./models/ClaseComestible');
const DetalleUnidad = require('./models/DetalleUnidad');
const Empresa = require('./models/Empresa');
const EstadoOrden = require('./models/EstadoOrden');
const Evento = require('./models/Evento');
const LineaComestible = require('./models/LineaComestible');
const Pais = require('./models/Pais');
const Persona = require('./models/Persona');
const Rol = require('./models/Rol');
const TipoBebida = require('./models/TipoBebida');
const TipoComestible = require('./models/TipoComestible');
const TipoComida = require('./models/TipoComida');
const TipoProducto = require('./models/TipoProducto');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:QRwAb1x0VruYHgwL@cltadriano.req5g.mongodb.net/restaurante?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    ClaseComestible: ClaseComestible,
    DetalleUnidad: DetalleUnidad,
    Empresa: Empresa,
    EstadoOrden: EstadoOrden,
    Evento: Evento,
    LineaComestible: LineaComestible,
    Pais: Pais,
    Persona: Persona,
    Rol: Rol,
    TipoBebida: TipoBebida,
    TipoComestible: TipoComestible,
    TipoComida: TipoComida,
    TipoProducto: TipoProducto
};