const express = require('express');
const router = express.Router();
const bitacoraController = require('../controllers/bitacoraController.js');
const cajaController = require('../controllers/cajaController.js');
const clienteController = require('../controllers/clienteController.js');
const consecutivoController = require('../controllers/consecutivoController.js');
const paisController = require('../controllers/paisController.js');
const claseComestibleController = require('../controllers/claseComestibleController.js');
const detalleUnidadController = require('../controllers/detalleUnidadController.js');
const empleadosController = require('../controllers/empleadoController.js');
const empresaController = require('../controllers/empresaController.js');
const eventoController = require('../controllers/eventoController.js');
const facturaController = require('../controllers/facturaController.js');
const lineaComestibleController = require('../controllers/lineaComestibleController.js');
const marcaController = require('../controllers/marcaController.js');
const mesaController = require('../controllers/mesaController.js');
const restauranteController = require('../controllers/restauranteController.js');
const ordenController = require('../controllers/ordenController.js');
const productoController = require('../controllers/productoController.js');
const platilloController = require('../controllers/platilloController.js');
const proveedorController = require('../controllers/proveedorController.js');
const tipoBebidaController = require('../controllers/tipoBebidaController.js');
const tipoComestibleController = require('../controllers/tipoComestibleController.js');
const tipoComidaController = require('../controllers/tipoComidaController.js');
const tipoProductoController = require('../controllers/tipoProductoController.js');
const tipoPlatilloController = require('../controllers/tipoPlatilloController.js');
const unidadMedidaController = require('../controllers/unidadMedidaController.js');
const usuarioController = require('../controllers/usuarioController.js');

const prefix = '/api';

module.exports = function () {
    /** CRUDs **/
    // Consecutivo
    router.get(`${prefix}/consecutivo`, consecutivoController.getAll)
    router.get(`${prefix}/consecutivo/:id`, consecutivoController.get)
    router.post(`${prefix}/consecutivo`, consecutivoController.create)
    router.put(`${prefix}/consecutivo/:id`, consecutivoController.update)
    router.delete(`${prefix}/consecutivo/:id`, consecutivoController.delete)
    // Bitacora
    router.get(`${prefix}/bitacora`, bitacoraController.getAll)
    router.get(`${prefix}/bitacora/:id`, bitacoraController.get)
    router.post(`${prefix}/bitacora`, bitacoraController.create)
    router.put(`${prefix}/bitacora/:id`, bitacoraController.update)
    router.delete(`${prefix}/bitacora/:id`, bitacoraController.delete)
    // Cajas
    router.get(`${prefix}/caja`, cajaController.getAll)
    router.get(`${prefix}/caja/restaurante`, cajaController.findByRestaurante)
    router.get(`${prefix}/caja/:id`, cajaController.get)
    router.post(`${prefix}/caja`, cajaController.create)
    router.post(`${prefix}/caja/cambiarEstadoCaja`, cajaController.cambiarEstadoCaja)
    router.put(`${prefix}/caja/:id`, cajaController.update)
    router.delete(`${prefix}/caja/:id`, cajaController.delete)
    // Clientes
    router.get(`${prefix}/cliente`, clienteController.getAll)
    router.get(`${prefix}/cliente/:id`, clienteController.get)
    router.post(`${prefix}/cliente`, clienteController.create)
    router.put(`${prefix}/cliente/:id`, clienteController.update)
    router.delete(`${prefix}/cliente/:id`, clienteController.delete)
    // Pais
    router.get(`${prefix}/pais`, paisController.getAll)
    router.get(`${prefix}/pais/:id`, paisController.get)
    router.post(`${prefix}/pais`, paisController.create)
    router.put(`${prefix}/pais/:id`, paisController.update)
    router.delete(`${prefix}/pais/:id`, paisController.delete)
     // Clase Comestible
     router.get(`${prefix}/claseComestible`, claseComestibleController.getAll)
     router.get(`${prefix}/claseComestible/:id`, claseComestibleController.get)
     router.post(`${prefix}/claseComestible`, claseComestibleController.create)
     router.put(`${prefix}/claseComestible/:id`, claseComestibleController.update)
     router.delete(`${prefix}/claseComestible/:id`, claseComestibleController.delete)
     // Detalle Unidad
     router.get(`${prefix}/detalleUnidad`, detalleUnidadController.getAll)
     router.get(`${prefix}/detalleUnidad/:id`, detalleUnidadController.get)
     router.post(`${prefix}/detalleUnidad`, detalleUnidadController.create)
     router.put(`${prefix}/detalleUnidad/:id`, detalleUnidadController.update)
     router.delete(`${prefix}/detalleUnidad/:id`, detalleUnidadController.delete)
     // Empleados
     router.get(`${prefix}/empleados`, empleadosController.getAll)
     router.get(`${prefix}/empleados/:id`, empleadosController.get)
     router.post(`${prefix}/empleados`, empleadosController.create)
     router.put(`${prefix}/empleados/:id`, empleadosController.update)
     router.delete(`${prefix}/empleados/:id`, empleadosController.delete)
     // Empresa
     router.get(`${prefix}/empresa`, empresaController.getAll)
     router.get(`${prefix}/empresa/:id`, empresaController.get)
     router.post(`${prefix}/empresa`, empresaController.create)
     router.put(`${prefix}/empresa/:id`, empresaController.update)
     router.delete(`${prefix}/empresa/:id`, empresaController.delete)
     // Evento
     router.get(`${prefix}/evento`, eventoController.getAll)
     router.get(`${prefix}/evento/:id`, eventoController.get)
     router.post(`${prefix}/evento`, eventoController.create)
     router.put(`${prefix}/evento/:id`, eventoController.update)
     router.delete(`${prefix}/evento/:id`, eventoController.delete)
    // Facturas
     router.get(`${prefix}/factura`, facturaController.getAll)
     router.get(`${prefix}/factura/:id`, facturaController.get)
     router.post(`${prefix}/factura`, facturaController.create)
     router.put(`${prefix}/factura/:id`, facturaController.update)
     router.delete(`${prefix}/factura/:id`, facturaController.delete)
     // Linea Comestible
     router.get(`${prefix}/lineaComestible`, lineaComestibleController.getAll)
     router.get(`${prefix}/lineaComestible/:id`, lineaComestibleController.get)
     router.post(`${prefix}/lineaComestible`, lineaComestibleController.create)
     router.put(`${prefix}/lineaComestible/:id`, lineaComestibleController.update)
     router.delete(`${prefix}/lineaComestible/:id`, lineaComestibleController.delete)
     // Marca
     router.get(`${prefix}/marca`, marcaController.getAll)
     router.get(`${prefix}/marca/:id`, marcaController.get)
     router.post(`${prefix}/marca`, marcaController.create)
     router.put(`${prefix}/marca/:id`, marcaController.update)
     router.delete(`${prefix}/marca/:id`, marcaController.delete)
     // Mesas
     router.get(`${prefix}/mesa`, mesaController.getAll)
     router.get(`${prefix}/mesa/restaurante`, mesaController.findByRestaurante)
     router.get(`${prefix}/mesa/:id`, mesaController.get)
     router.post(`${prefix}/mesa`, mesaController.create)
     router.put(`${prefix}/mesa/:id`, mesaController.update)
     router.delete(`${prefix}/mesa/:id`, mesaController.delete)
     // Restaurantes
     router.get(`${prefix}/restaurante`, restauranteController.getAll)
     router.get(`${prefix}/restaurante/:id`, restauranteController.get)
     router.post(`${prefix}/restaurante`, restauranteController.create)
     router.put(`${prefix}/restaurante/:id`, restauranteController.update)
     router.delete(`${prefix}/restaurante/:id`, restauranteController.delete)
     // Orden
     router.get(`${prefix}/orden`, ordenController.getAll)
     router.get(`${prefix}/orden/mesa/:id`, ordenController.findOrdenActivaByMesa)
     router.get(`${prefix}/orden/:id`, ordenController.get)
     router.post(`${prefix}/orden`, ordenController.create)
     router.put(`${prefix}/orden/agregar/:id`, ordenController.agregarPlatillo)
     router.put(`${prefix}/orden/quitar/:id`, ordenController.quitarPlatillo)
     router.put(`${prefix}/orden/cerrar/:id`, ordenController.cerrarOrden)
     router.put(`${prefix}/orden/:id`, ordenController.update)
     router.delete(`${prefix}/orden/:id`, ordenController.delete)
     // Producto
     router.get(`${prefix}/producto`, productoController.getAll)
     router.get(`${prefix}/producto/:id`, productoController.get)
     router.post(`${prefix}/producto`, productoController.create)
     router.put(`${prefix}/producto/:id`, productoController.update)
     router.delete(`${prefix}/producto/:id`, productoController.delete)
     // Platillos
     router.get(`${prefix}/platillo`, platilloController.getAll)
     router.get(`${prefix}/platillo/:id`, platilloController.get)
     router.post(`${prefix}/platillo`, platilloController.create)
     router.put(`${prefix}/platillo/:id`, platilloController.update)
     router.delete(`${prefix}/platillo/:id`, platilloController.delete)
     // Proveedor
     router.get(`${prefix}/proveedor`, proveedorController.getAll)
     router.get(`${prefix}/proveedor/:id`, proveedorController.get)
     router.post(`${prefix}/proveedor`, proveedorController.create)
     router.put(`${prefix}/proveedor/:id`, proveedorController.update)
     router.delete(`${prefix}/proveedor/:id`, proveedorController.delete)
     // Tipo bebida
     router.get(`${prefix}/tipoBebida`, tipoBebidaController.getAll)
     router.get(`${prefix}/tipoBebida/:id`, tipoBebidaController.get)
     router.post(`${prefix}/tipoBebida`, tipoBebidaController.create)
     router.put(`${prefix}/tipoBebida/:id`, tipoBebidaController.update)
     router.delete(`${prefix}/tipoBebida/:id`, tipoBebidaController.delete)
     // Tipo Comestible
     router.get(`${prefix}/tipoComestible`, tipoComestibleController.getAll)
     router.get(`${prefix}/tipoComestible/:id`, tipoComestibleController.get)
     router.post(`${prefix}/tipoComestible`, tipoComestibleController.create)
     router.put(`${prefix}/tipoComestible/:id`, tipoComestibleController.update)
     router.delete(`${prefix}/tipoComestible/:id`, tipoComestibleController.delete)
     // Tipo Comida
     router.get(`${prefix}/tipoComida`, tipoComidaController.getAll)
     router.get(`${prefix}/tipoComida/:id`, tipoComidaController.get)
     router.post(`${prefix}/tipoComida`, tipoComidaController.create)
     router.put(`${prefix}/tipoComida/:id`, tipoComidaController.update)
     router.delete(`${prefix}/tipoComida/:id`, tipoComidaController.delete)
     // Tipo Producto
     router.get(`${prefix}/tipoProducto`, tipoProductoController.getAll)
     router.get(`${prefix}/tipoProducto/:id`, tipoProductoController.get)
     router.post(`${prefix}/tipoProducto`, tipoProductoController.create)
     router.put(`${prefix}/tipoProducto/:id`, tipoProductoController.update)
     router.delete(`${prefix}/tipoProducto/:id`, tipoProductoController.delete)
     // Tipo Platillo
     router.get(`${prefix}/tipoPlatillo`, tipoPlatilloController.getAll)
     router.get(`${prefix}/tipoPlatillo/:id`, tipoPlatilloController.get)
     router.post(`${prefix}/tipoPlatillo`, tipoPlatilloController.create)
     router.put(`${prefix}/tipoPlatillo/:id`, tipoPlatilloController.update)
     router.delete(`${prefix}/tipoPlatillo/:id`, tipoPlatilloController.delete)
     // Unidad Medida
     router.get(`${prefix}/unidadMedida`, unidadMedidaController.getAll)
     router.get(`${prefix}/unidadMedida/:id`, unidadMedidaController.get)
     router.post(`${prefix}/unidadMedida`, unidadMedidaController.create)
     router.put(`${prefix}/unidadMedida/:id`, unidadMedidaController.update)
     router.delete(`${prefix}/unidadMedida/:id`, unidadMedidaController.delete)
     // Usuario
     router.get(`${prefix}/usuario`, usuarioController.getAll)
     router.get(`${prefix}/usuario/:id`, usuarioController.get)
     router.post(`${prefix}/usuario`, usuarioController.create)
     router.put(`${prefix}/usuario/:id`, usuarioController.update)
     router.delete(`${prefix}/usuario/:id`, usuarioController.delete)

    return router;
}