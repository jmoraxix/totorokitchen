const express = require('express');
const router = express.Router();
const bitacoraController = require('../controllers/bitacoraController.js');
const cajasController = require('../controllers/cajasController.js');
const clientesController = require('../controllers/clientesController.js');
const comestibleController = require('../controllers/comestibleController.js');
const consecutivoController = require('../controllers/consecutivoController.js');
const paisController = require('../controllers/paisController.js');
const claseComestibleController = require('../controllers/claseComestibleController.js');
const detalleUnidadController = require('../controllers/detalleUnidadController.js');
const empleadosController = require('../controllers/empleadosController.js');
const empresaController = require('../controllers/empresaController.js');
const estadoOrdenController = require('../controllers/estadoOrdenController.js');
const eventoController = require('../controllers/eventoController.js');
const facturasController = require('../controllers/facturasController.js');
const lineaComestibleController = require('../controllers/lineaComestibleController.js');
const marcaController = require('../controllers/marcaController.js');
const mesasController = require('../controllers/mesasController.js');
const restaurantesController = require('../controllers/restaurantesController.js');
const ordenController = require('../controllers/ordenController.js');
const productoController = require('../controllers/productoController.js');
const platilloController = require('../controllers/platilloController.js');
const proveedorController = require('../controllers/proveedorController.js');
const rolController = require('../controllers/rolController.js');
const tipoBebidaController = require('../controllers/tipoBebidaController.js');
const tipoComestibleController = require('../controllers/tipoComestibleController.js');
const tipoComidaController = require('../controllers/tipoComidaController.js');
const tipoProductoController = require('../controllers/tipoProductoController.js');
const tipoPlatilloController = require('../controllers/tipoPlatilloController.js');
const unidadMedidaController = require('../controllers/unidadMedidaController.js');
const usuariosController = require('../controllers/usuariosController.js');

const prefix = '/api';

module.exports = function () {
    /** CRUDs **/
    // Consecutivo
    router.get(`${prefix}/consecutivo`, consecutivoController.getAll)
    router.get(`${prefix}/consecutivo/generarConsecutivo`, consecutivoController.generarConsecutivo)
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
    router.get(`${prefix}/cajas`, cajasController.getAll)
    router.get(`${prefix}/cajas/:id`, cajasController.get)
    router.post(`${prefix}/cajas`, cajasController.create)
    router.put(`${prefix}/cajas/:id`, cajasController.update)
    router.delete(`${prefix}/cajas/:id`, cajasController.delete)
    // Clientes
    router.get(`${prefix}/clientes`, clientesController.getAll)
    router.get(`${prefix}/clientes/:id`, clientesController.get)
    router.post(`${prefix}/clientes`, clientesController.create)
    router.put(`${prefix}/clientes/:id`, clientesController.update)
    router.delete(`${prefix}/clientes/:id`, clientesController.delete)
    // Comestible
    router.get(`${prefix}/comestibles`, comestibleController.getAll)
    router.get(`${prefix}/comestibles/:id`, comestibleController.get)
    router.post(`${prefix}/comestibles`, comestibleController.create)
    router.put(`${prefix}/comestibles/:id`, comestibleController.update)
    router.delete(`${prefix}/comestibles/:id`, comestibleController.delete)
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
     // Estado Orden
     router.get(`${prefix}/estadoOrden`, estadoOrdenController.getAll)
     router.get(`${prefix}/estadoOrden/:id`, estadoOrdenController.get)
     router.post(`${prefix}/estadoOrden`, estadoOrdenController.create)
     router.put(`${prefix}/estadoOrden/:id`, estadoOrdenController.update)
     router.delete(`${prefix}/estadoOrden/:id`, estadoOrdenController.delete)
     // Evento
     router.get(`${prefix}/evento`, eventoController.getAll)
     router.get(`${prefix}/evento/:id`, eventoController.get)
     router.post(`${prefix}/evento`, eventoController.create)
     router.put(`${prefix}/evento/:id`, eventoController.update)
     router.delete(`${prefix}/evento/:id`, eventoController.delete)
    // Facturas
     router.get(`${prefix}/facturas`, facturasController.getAll)
     router.get(`${prefix}/facturas/:id`, facturasController.get)
     router.post(`${prefix}/facturas`, facturasController.create)
     router.put(`${prefix}/facturas/:id`, facturasController.update)
     router.delete(`${prefix}/facturas/:id`, facturasController.delete)
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
     router.get(`${prefix}/mesas`, mesasController.getAll)
     router.get(`${prefix}/mesas/:id`, mesasController.get)
     router.post(`${prefix}/mesas`, mesasController.create)
     router.put(`${prefix}/mesas/:id`, mesasController.update)
     router.delete(`${prefix}/mesas/:id`, mesasController.delete)
    // Restaurantes
     router.get(`${prefix}/restaurantes`, restaurantesController.getAll)
     router.get(`${prefix}/restaurantes/:id`, restaurantesController.get)
     router.post(`${prefix}/restaurantes`, restaurantesController.create)
     router.put(`${prefix}/restaurantes/:id`, restaurantesController.update)
     router.delete(`${prefix}/restaurantes/:id`, restaurantesController.delete)
     // Orden
     router.get(`${prefix}/orden`, ordenController.getAll)
     router.get(`${prefix}/orden/:id`, ordenController.get)
     router.post(`${prefix}/orden`, ordenController.create)
     router.put(`${prefix}/orden/:id`, ordenController.update)
     router.delete(`${prefix}/orden/:id`, ordenController.delete)
     // Producto
     router.get(`${prefix}/productos`, productoController.getAll)
     router.get(`${prefix}/productos/:id`, productoController.get)
     router.post(`${prefix}/productos`, productoController.create)
     router.put(`${prefix}/productos/:id`, productoController.update)
     router.delete(`${prefix}/productos/:id`, productoController.delete)
     // Platillos
     router.get(`${prefix}/platillos`, platilloController.getAll)
     router.get(`${prefix}/platillos/:id`, platilloController.get)
     router.post(`${prefix}/platillos`, platilloController.create)
     router.put(`${prefix}/platillos/:id`, platilloController.update)
     router.delete(`${prefix}/platillos/:id`, platilloController.delete)
     // Proveedor
     router.get(`${prefix}/proveedores`, proveedorController.getAll)
     router.get(`${prefix}/proveedores/:id`, proveedorController.get)
     router.post(`${prefix}/proveedores`, proveedorController.create)
     router.put(`${prefix}/proveedores/:id`, proveedorController.update)
     router.delete(`${prefix}/proveedores/:id`, proveedorController.delete)
     // Rol
     router.get(`${prefix}/rol`, rolController.getAll)
     router.get(`${prefix}/rol/:id`, rolController.get)
     router.post(`${prefix}/rol`, rolController.create)
     router.put(`${prefix}/rol/:id`, rolController.update)
     router.delete(`${prefix}/rol/:id`, rolController.delete)
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
     router.get(`${prefix}/unidadMedidas`, unidadMedidaController.getAll)
     router.get(`${prefix}/unidadMedidas/:id`, unidadMedidaController.get)
     router.post(`${prefix}/unidadMedidas`, unidadMedidaController.create)
     router.put(`${prefix}/unidadMedidas/:id`, unidadMedidaController.update)
     router.delete(`${prefix}/unidadMedidas/:id`, unidadMedidaController.delete)
     // Usuario
     router.get(`${prefix}/usuarios`, usuariosController.getAll)
     router.get(`${prefix}/usuarios/:id`, usuariosController.get)
     router.post(`${prefix}/usuarios`, usuariosController.create)
     router.put(`${prefix}/usuarios/:id`, usuariosController.update)
     router.delete(`${prefix}/usuarios/:id`, usuariosController.delete)

    return router;
}