const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController.js');

const prefix = '/api';

module.exports= function(){
    // Pais
    router.get(`${prefix}/pais`, paisController.lista)
    router.get(`${prefix}/pais/:id`, paisController.seleccionado)
    router.post(`${prefix}/pais`, paisController.agregar)
    router.put(`${prefix}/pais/:id`, paisController.actualizar)
    router.delete(`${prefix}/pais/:id`, paisController.eliminar)

    return router;
}