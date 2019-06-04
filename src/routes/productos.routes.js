const express = require('express');
const productoController = require('../controllers/productos.controller');

const router = express.Router();

/*
router.get('/api/productos/:nombre', productoController.getProductoByNombre);
router.delete('/api/productos/:id', productoController.eliminarProducto);
*/
router.post('/api/productos/', productoController.crearProducto);
router.get('/api/productos/', productoController.getProductos);
router.get('/api/productos/:id', productoController.getProductoById);
router.put('/api/productos/:id', productoController.updateProducto);


module.exports = router;