const Categoria = require('../models/CategoriaProducto');
const mongoose = require('mongoose');

const categoriaController = {};

categoriaController.getCategorias = async (req, res) =>  {
    const categorias = await Categoria.find();
    res.send(categorias);
};
categoriaController.crearCategoria = async (req, res) => {
    const nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();
    res.send(nuevaCategoria);
};
categoriaController.getCategoriaByNombre = ()=>{

};
categoriaController.eliminarCategoria = ()=>{

};
categoriaController.updateCategoria = ()=>{

};

module.exports = categoriaController;


