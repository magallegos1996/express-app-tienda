const categoriaController = {};
const Categoria = require('../models/CategoriaProducto');
const Producto = require('../models/Producto');

categoriaController.getCategorias = async (req,res)=>{
    const categorias =  await Categoria.find();
    res.json(categorias);
};
categoriaController.getCategoriaByNombre = async (req, res)=>{
    const categoria = await Categoria.findOne({nombre: req.params.nombre});
    res.json(categoria);
};
categoriaController.crearCategoria = async (req, res)=>{
    const nuevaCategoria = new Categoria(req.body);
    await nuevaCategoria.save();
    res.json(nuevaCategoria)
};
categoriaController.eliminarCategoria = (req, res)=>{
    Categoria.findById(req.params.id, (err, categoria)=>{
        if(err) throw err;
        Producto.remove({
            "_id":{
                $in: categoria.productos
            }
        }, (err)=>{
            if(err) throw err;
            categoria.remove();
            res.json({status: 'Categoria Eliminada'});
        })
    });
   // res.json({staus: 'Categoria Eliminada'});
};





module.exports = categoriaController;


