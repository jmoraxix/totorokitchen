const mongoose = require('mongoose');


const Bitacora = require('./models/Bitacora');
const Cajas = require('./models/Cajas');
const ClaseComestible = require('./models/ClaseComestible');
const Clientes = require('./models/Clientes');
const Comestible = require('./models/Comestible');
const Consecutivo = require('./models/Consecutivo');
const DetalleUnidad = require('./models/DetalleUnidad');
const Empleados = require('./models/Empleados');
const Empresa = require('./models/Empresa');
const EstadoOrden = require('./models/EstadoOrden');
const Evento = require('./models/Evento');
const Facturas = require('./models/Facturas');
const LineaComestible = require('./models/LineaComestible');
const Marca = require('./models/Marca');
const Mesas = require('./models/Mesas');
const Orden = require('./models/Orden');
const Pais = require('./models/Pais');
const Persona = require('./models/Persona');
const Platillo = require('./models/Platillo');
const Producto = require('./models/Producto');
const Proveedores = require('./models/Proveedores');
const Puestos = require('./models/Puestos');
const Restaurantes = require('./models/Restaurantes');
const Rol = require('./models/Rol');
const TipoBebida = require('./models/TipoBebida');
const TipoComestible = require('./models/TipoComestible');
const TipoComida = require('./models/TipoComida');
const TipoPlatillo = require('./models/TipoPlatillo');
const TipoProducto = require('./models/TipoProducto');
const UnidadMedida = require('./models/UnidadMedida');
const Usuarios = require('./models/Usuarios');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:QRwAb1x0VruYHgwL@cltadriano.req5g.mongodb.net/restaurante?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    
    Bitacora: Bitacora,   
    Cajas: Cajas,
    ClaseComestible: ClaseComestible,
    Clientes: Clientes,
    Comestible: Comestible,
    Consecutivo: Consecutivo,
    DetalleUnidad: DetalleUnidad,
    Empleados: Empleados,
    Empresa: mongoose.model('Empresa', Empresa),
    EstadoOrden: EstadoOrden,
    Evento: Evento,
    Facturas: Facturas,
    LineaComestible: LineaComestible,
    Marca: Marca,
    Mesas: Mesas,
    Orden: Orden,
    Pais: mongoose.model('Pais', Pais),
    Persona: Persona,
    Platillo: Platillo,    
    Producto: Producto,
    Proveedores: Proveedores,
    Puestos: Puestos,
    Restaurantes: Restaurantes,
    Rol: Rol,
    TipoBebida: TipoBebida,
    TipoComestible: TipoComestible,
    TipoComida: TipoComida,
    TipoPlatillo: TipoPlatillo,
    TipoProducto: TipoProducto,    
    UnidadMedida: UnidadMedida,
    Usuarios: Usuarios,


};