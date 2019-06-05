const usuarioController = {};
const Usuario = require('../models/Usuario');



usuarioController.getUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
};
usuarioController.getUsuarioById = async (req, res)=>{
    try {
        const usuario = await Usuario.findById(req.params.id);
        res.json(usuario);
    }catch (e) {
        res.json({status: 'No se encontró ningun usuario'})
    }
};
usuarioController.crearUsuario = async (req, res)=>{
    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        username: req.body.username,
        password: req.body.password,
        correoElectronico: req.body.correoElectronico,
        tarjetasCredito: req.body.tarjetasCredito
    });
    try{
        const usuario = await nuevoUsuario.save();
        res.json(usuario);
    }catch (e) {res.json('Error');}
};
usuarioController.updateUsuario = async (req, res)=>{
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        username: req.body.username,
        password: req.body.password,
        correoElectronico: req.body.correoElectronico
    };
    await Usuario.findByIdAndUpdate(req.params.id, {$set: usuario});
    res.json(usuario);

};
usuarioController.deleteUsuario = async (req, res) =>{
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    res.json(usuario);
};

module.exports = usuarioController;


