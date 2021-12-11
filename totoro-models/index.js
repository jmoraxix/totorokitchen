const mongoose = require('mongoose');

const Bebidas = require('./models/Bebidas');
const Bitacora = require('./models/Bitacora');
const Buffet = require('./models/Buffet');
const Cajas = require('./models/Cajas');
const ClaseComestible = require('./models/ClaseComestible');
const Clientes = require('./models/Clientes');
const Comestible = require('./models/Comestible');
const Consecutivo = require('./models/Consecutivo');
const Desechables = require('./models/Desechables');
const DetalleUnidad = require('./models/DetalleUnidad');
const Empleados = require('./models/Empleados');
const Empresa = require('./models/Empresa');
const Equipos = require('./models/Equipos');
const Especiales = require('./models/Especiales');
const EstadoOrden = require('./models/EstadoOrden');
const Evento = require('./models/Evento');
const Facturas = require('./models/Facturas');
const Limpieza = require('./models/Limpieza');
const LineaComestible = require('./models/LineaComestible');
const Marca = require('./models/Marca');
const Mesas = require('./models/Mesas');
const Orden = require('./models/Orden');
const Pais = require('./models/Pais');
const Persona = require('./models/Persona');
const Platillo = require('./models/Platillo');
const PlatilloOrden = require('./models/PlatilloOrden');
const Producto = require('./models/Producto');
const Proveedores = require('./models/Proveedores');
const Puestos = require('./models/Puestos');
const Restaurantes = require('./models/Restaurantes');
const Rol = require('./models/Rol');
const Tecnologia = require('./models/Tecnologia');
const TipoBebida = require('./models/TipoBebida');
const TipoComestible = require('./models/TipoComestible');
const TipoComida = require('./models/TipoComida');
const TipoProducto = require('./models/TipoProducto');
const UnidadMedida = require('./models/UnidadMedida');
const Usuarios = require('./models/Usuarios');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:QRwAb1x0VruYHgwL@cltadriano.req5g.mongodb.net/restaurante?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Bebidas: Bebidas,
    Bitacora: Bitacora,
    Buffet: Buffet,
    Cajas: Cajas,
    ClaseComestible: ClaseComestible,
    Clientes: Clientes,
    Comestible: Comestible,
    Consecutivo: Consecutivo,
    Desechables: Desechables,
    DetalleUnidad: DetalleUnidad,
    Empleados: Empleados,
    Empresa: Empresa,
    Equipos: Equipos,
    Especiales: Especiales,
    EstadoOrden: EstadoOrden,
    Evento: Evento,
    Facturas: Facturas,
    Limpieza: Limpieza,
    LineaComestible: LineaComestible,
    Marca: Marca,
    Mesas: Mesas,
    Orden: Orden,
    Pais: Pais,
    Persona: Persona,
    Platillo: Platillo,
    PlatilloOrden: PlatilloOrden,
    Producto: Producto,
    Proveedores: Proveedores,
    Puestos: Puestos,
    Restaurantes: Restaurantes,
    Rol: Rol,
    Tecnologia: Tecnologia,
    TipoBebida: TipoBebida,
    TipoComestible: TipoComestible,
    TipoComida: TipoComida,
    TipoProducto: TipoProducto,
    UnidadMedida: UnidadMedida,
    Usuarios: Usuarios,


};