const express = require('express');
const categoriaController = require('../controllers/categoria.controller');

const router = express.Router();

/*
router.get('/api/categorias/:nombre', categoriaController.getCategoriaByNombre);
router.put('/api/categorias/:id', categoriaController.updateCategoria);*/
router.post('/api/categorias', categoriaController.crearCategoria);
router.get('/api/categorias', categoriaController.getCategorias);
router.get('/api/categorias/:nombre', categoriaController.getCategoriaByNombre);
router.delete('/api/categorias/:id', categoriaController.eliminarCategoria);


module.exports = router;