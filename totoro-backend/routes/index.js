const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController.js');

const prefix = '/api';

module.exports= function(){
    // Pais
    router.get(`${prefix}/pais`, paisController.getAll)
    router.get(`${prefix}/pais/:id`, paisController.get)
    router.post(`${prefix}/pais`, paisController.create)
    router.put(`${prefix}/pais/:id`, paisController.update)
    router.delete(`${prefix}/pais/:id`, paisController.delete)

    return router;
}