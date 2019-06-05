const express = require('express');
const usuarioController = require('../controllers/usuario.controller');

const router = express.Router();

router.post('/api/usuarios/', usuarioController.crearUsuario);
router.get('/api/usuarios/', usuarioController.getUsuarios);
router.get('/api/usuarios/:id', usuarioController.getUsuarioById);
router.put('/api/usuarios/:id', usuarioController.updateUsuario);
router.delete('/api/usuarios/:id', usuarioController.deleteUsuario);

module.exports = router;