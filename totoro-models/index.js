const mongoose = require('mongoose');


const Bitacora = require('./models/Bitacora');
const Cajas = require('./models/Caja');
const ClaseComestible = require('./models/ClaseComestible');
const Clientes = require('./models/Cliente');
const Consecutivo = require('./models/Consecutivo');
const DetalleUnidad = require('./models/DetalleUnidad');
const Empleados = require('./models/Empleado');
const Empresa = require('./models/Empresa');
const EstadoOrden = require('./models/EstadoOrden');
const Evento = require('./models/Evento');
const Facturas = require('./models/Factura');
const LineaComestible = require('./models/LineaComestible');
const Marca = require('./models/Marca');
const Mesas = require('./models/Mesa');
const Orden = require('./models/Orden');
const Pais = require('./models/Pais');
const Persona = require('./models/Persona');
const Platillo = require('./models/Platillo');
const Producto = require('./models/Producto');
const Proveedores = require('./models/Proveedor');
const Puestos = require('./models/Puesto');
const Restaurantes = require('./models/Restaurante');
const TipoBebida = require('./models/TipoBebida');
const TipoComestible = require('./models/TipoComestible');
const TipoComida = require('./models/TipoComida');
const TipoPlatillo = require('./models/TipoPlatillo');
const TipoProducto = require('./models/TipoProducto');
const UnidadMedida = require('./models/UnidadMedida');
const Usuarios = require('./models/Usuario');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:QRwAb1x0VruYHgwL@cltadriano.req5g.mongodb.net/restaurante?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    
    Bitacora: mongoose.model('Bitacora', Bitacora),   
    Cajas: mongoose.model('Cajas', Cajas),
    ClaseComestible: mongoose.model('ClaseComestible', ClaseComestible),
    Clientes: mongoose.model('Clientes', Clientes),
    Consecutivo: mongoose.model('Consecutivo', Consecutivo),
    DetalleUnidad: mongoose.model('DetalleUnidad', DetalleUnidad),
    Empleados: mongoose.model('Empleados', Empleados),
    Empresa: mongoose.model('Empresa', Empresa),
    EstadoOrden: mongoose.model('EstadoOrden', EstadoOrden),
    Evento: mongoose.model('Evento', Evento),
    Facturas: mongoose.model('Facturas', Facturas),
    LineaComestible: mongoose.model('LineaComestible', LineaComestible),
    Marca: mongoose.model('Marca', Marca),
    Mesas: mongoose.model('Mesas', Mesas),
    Orden: mongoose.model('Orden', Orden),
    Pais: mongoose.model('Pais', Pais),
    Persona: mongoose.model('Persona', Persona),
    Platillo: mongoose.model('Platillo', Platillo),    
    Producto: mongoose.model('Producto', Producto),
    Proveedores: mongoose.model('Proveedores', Proveedores),
    Puestos: mongoose.model('Puestos', Puestos),
    Restaurantes: mongoose.model('Restaurantes', Restaurantes),
    TipoBebida: mongoose.model('TipoBebida', TipoBebida),
    TipoComestible: mongoose.model('TipoComestible', TipoComestible),
    TipoComida: mongoose.model('TipoComida', TipoComida),
    TipoPlatillo: mongoose.model('TipoPlatillo', TipoPlatillo),
    TipoProducto: mongoose.model('TipoProducto', TipoProducto),    
    UnidadMedida: mongoose.model('UnidadMedida', UnidadMedida),
    Usuarios: mongoose.model('Usuarios', Usuarios),


};