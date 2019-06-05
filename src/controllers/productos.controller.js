const productoController = {};
const Producto = require('../models/Producto');
const Categoria = require('../models/CategoriaProducto');


productoController.getProductos = async (req,res)=>{
    const productos =  await Producto.find();
    res.json(productos);
};
productoController.getProductoById = async (req, res)=>{
    try{
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    }catch (e) {
        res.json({status: 'No se encontró ningún producto'})
    }
};
productoController.crearProducto = async (req, res)=>{
    const nuevoProducto = new Producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria
    });
    const producto = await nuevoProducto.save();
    const categoria = await Categoria.findById(req.body.categoria);
    categoria.productos.push(producto);
    await categoria.save();
    res.json(nuevoProducto);
};
productoController.updateProducto = async (req, res)=>{
    const producto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
    };
    await Producto.findByIdAndUpdate(req.params.id, {$set: producto});
    res.json(producto);
};
productoController.deleteProducto = async (req, res) =>{
    const producto = await Producto.findByIdAndDelete(req.params.id);
    await Categoria.findByIdAndUpdate(producto.categoria, {$pull: {productos: producto.id}});
    res.json({status: 'Producto Eliminado'});
};

module.exports = productoController;


