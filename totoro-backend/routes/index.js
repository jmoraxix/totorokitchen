const express = require('express');
const router = express.Router();
const consecutivoController = require('../controllers/consecutivoController.js');
const paisController = require('../controllers/paisController.js');
const claseComestibleController = require('../controllers/claseComestibleController.js');
const detalleUnidadController = require('../controllers/detalleUnidadController.js');
const empresaController = require('../controllers/empresaController.js');
const estadoOrdenController = require('../controllers/estadoOrdenController.js');
const eventoController = require('../controllers/eventoController.js');
const lineaComestibleController = require('../controllers/lineaComestibleController.js');
const rolController = require('../controllers/rolController.js');
const tipoBebidaController = require('../controllers/tipoBebidaController.js');
const tipoComestibleController = require('../controllers/tipoComestibleController.js');
const tipoComidaController = require('../controllers/tipoComidaController.js');
const tipoProductoController = require('../controllers/tipoProductoController.js');

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
     // Linea Comestible
     router.get(`${prefix}/lineaComestible`, lineaComestibleController.getAll)
     router.get(`${prefix}/lineaComestible/:id`, lineaComestibleController.get)
     router.post(`${prefix}/lineaComestible`, lineaComestibleController.create)
     router.put(`${prefix}/lineaComestible/:id`, lineaComestibleController.update)
     router.delete(`${prefix}/lineaComestible/:id`, lineaComestibleController.delete)
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

    return router;
}