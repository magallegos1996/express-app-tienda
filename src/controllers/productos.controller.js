const Producto = require('../models/Producto');
const CategoriaProducto = require('../models/CategoriaProducto');

const productoController = {};

productoController.getProductos = async (req, res) =>  {
    const productos = await Producto.find();
    res.json(productos);
};
productoController.crearProducto = async (req, res) => {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    const categoria = await CategoriaProducto.findOne({nombre: nuevoProducto.categoria});
    if(categoria){
       categoria.productos.push(nuevoProducto);
       categoria.save();
       res.json(nuevoProducto);
    }
};
productoController.getProductoByNombre = (req, res)=>{
    const nombreProducto = req.param.nombre;
    const producto = new Producto.find({nombre: nombreProducto});
    res.json(producto);
};
productoController.getProductoById = async (req, res)=>{
    const idProducto = req.param.id;
    const producto = await new Producto.find({_id: idProducto});
    res.json(producto);
};
productoController.eliminarProducto = async (req, res)=>{
  await Producto.findByIdAndRemove(req.params.id);
  res.json({status: 'Producto eliminado'});
};
productoController.updateProducto = async (req, res)=>{
    const producto = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion
    };
    await Producto.findByIdAndUpdate(req.params.id, {$set: producto});
    res.json({status: 'Producto Actualizado'})
};

module.exports = productoController;


