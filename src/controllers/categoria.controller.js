const categoriaController = {};
const Categoria = require('../models/CategoriaProducto');
const Producto = require('../models/Producto');

categoriaController.getCategorias = async (req,res)=>{
    try {
        const categorias =  await Categoria.find();
        res.json(categorias);
    }catch (e) {res.json({status: 'Error'})}
};
categoriaController.getCategoriaByNombre = async (req, res)=>{
    try{
        const categoria = await Categoria.findOne({nombre: req.params.nombre});
        res.json(categoria);
    } catch (e) {res.json({status: 'Error'})}
};
categoriaController.crearCategoria = async (req, res)=>{
    const nuevaCategoria = new Categoria(req.body);
    try {
        await nuevaCategoria.save();
        res.json(nuevaCategoria)
    }catch (error) {res.json({status:'Error'})}
};
categoriaController.eliminarCategoria = async (req, res)=>{
    Categoria.findById(req.params.id, (err, categoria)=>{
        Producto.remove({
            '_id': {
                $in: categoria.productos
            }
        }, (err)=>{
            if(err) res.json({status: 'Error'});
            categoria.remove();
            res.json({status: 'Categoria Eliminada'});

        })
    });
    // res.json({staus: 'Categoria Eliminada'});
};

module.exports = categoriaController;


