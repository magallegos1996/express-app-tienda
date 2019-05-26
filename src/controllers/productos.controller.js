const Producto = require('../models/Producto');
const CategoriaProducto = require('../models/CategoriaProducto');

const productoController = {};

productoController.getProductos = async (req, res) =>  {
    const productos = await Producto.find();
    res.send(productos);
};
productoController.crearProducto = async (req, res) => {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    const categoria = await CategoriaProducto.findOne({nombre: nuevoProducto.categoria});
    if(categoria){
       categoria.productos.push(nuevoProducto);
       categoria.save();
       res.send(nuevoProducto);
    }

};
productoController.getProductoByNombre = ()=>{
    const nombreProducto = req.param.nombre;
    const producto = new Producto.find({nombre: nombreProducto});
    res.send(producto);
};
productoController.getProductoById = ()=>{
    const idProducto = req.param.id;
    const producto = new Producto.find({_id: idProducto});
    res.send(producto);
};
productoController.eliminarProducto = ()=>{
};
productoController.updateProducto = ()=>{
};

module.exports = productoController;


