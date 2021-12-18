const mongoose = require('mongoose');


const Bitacora = require('./models/Bitacora');
const Caja = require('./models/Caja');
const ClaseComestible = require('./models/ClaseComestible');
const Cliente = require('./models/Cliente');
const Consecutivo = require('./models/Consecutivo');
const DetalleUnidad = require('./models/DetalleUnidad');
const Empleado = require('./models/Empleado');
const Empresa = require('./models/Empresa');
const Evento = require('./models/Evento');
const Factura = require('./models/Factura');
const LineaComestible = require('./models/LineaComestible');
const Marca = require('./models/Marca');
const Mesa = require('./models/Mesa');
const Orden = require('./models/Orden');
const Pais = require('./models/Pais');
const Persona = require('./models/Persona');
const Platillo = require('./models/Platillo');
const Producto = require('./models/Producto');
const Proveedor = require('./models/Proveedor');
const Puesto = require('./models/Puesto');
const Restaurante = require('./models/Restaurante');
const TipoBebida = require('./models/TipoBebida');
const TipoComestible = require('./models/TipoComestible');
const TipoComida = require('./models/TipoComida');
const TipoPlatillo = require('./models/TipoPlatillo');
const TipoProducto = require('./models/TipoProducto');
const UnidadMedida = require('./models/UnidadMedida');
const Usuario = require('./models/Usuario');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:QRwAb1x0VruYHgwL@cltadriano.req5g.mongodb.net/restaurante?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Bitacora: mongoose.model('Bitacora', Bitacora),
    Caja: mongoose.model('Caja', Caja),
    ClaseComestible: mongoose.model('ClaseComestible', ClaseComestible),
    Cliente: mongoose.model('Cliente', Cliente),
    Consecutivo: mongoose.model('Consecutivo', Consecutivo),
    DetalleUnidad: mongoose.model('DetalleUnidad', DetalleUnidad),
    Empleado: mongoose.model('Empleado', Empleado),
    Empresa: mongoose.model('Empresa', Empresa),
    Evento: mongoose.model('Evento', Evento),
    Factura: mongoose.model('Factura', Factura),
    LineaComestible: mongoose.model('LineaComestible', LineaComestible),
    Marca: mongoose.model('Marca', Marca),
    Mesa: mongoose.model('Mesa', Mesa),
    Orden: mongoose.model('Orden', Orden),
    Pais: mongoose.model('Pais', Pais),
    Persona: mongoose.model('Persona', Persona),
    Platillo: mongoose.model('Platillo', Platillo),    
    Producto: mongoose.model('Producto', Producto),
    Proveedor: mongoose.model('Proveedor', Proveedor),
    Puesto: mongoose.model('Puesto', Puesto),
    Restaurante: mongoose.model('Restaurante', Restaurante),
    TipoBebida: mongoose.model('TipoBebida', TipoBebida),
    TipoComestible: mongoose.model('TipoComestible', TipoComestible),
    TipoComida: mongoose.model('TipoComida', TipoComida),
    TipoPlatillo: mongoose.model('TipoPlatillo', TipoPlatillo),
    TipoProducto: mongoose.model('TipoProducto', TipoProducto),    
    UnidadMedida: mongoose.model('UnidadMedida', UnidadMedida),
    Usuario: mongoose.model('Usuario', Usuario)
};