const express = require('express');
const productoController = require('../controllers/productos.controller');

const router = express.Router();

/*
router.get('/api/productos/:nombre', productoController.getProductoByNombre);
*/
router.post('/api/productos/', productoController.crearProducto);
router.get('/api/productos/', productoController.getProductos);
router.get('/api/productos/:id', productoController.getProductoById);
router.put('/api/productos/:id', productoController.updateProducto);
router.delete('/api/productos/:id', productoController.deleteProducto);


module.exports = router;