const express = require('express');
const productoController = require('../controllers/productos.controller');

const router = express.Router();

router.get('/api/productos', productoController.getProductos);
router.post('/api/productos/', productoController.crearProducto);
router.get('/api/producto/:nombre', productoController.getProductoByNombre);
router.get('/api/producto/:id', productoController.getProductoById);
router.delete('/api/producto/:id', productoController.eliminarProducto);
router.put('/api/producto/:id', productoController.updateProducto);


module.exports = router;