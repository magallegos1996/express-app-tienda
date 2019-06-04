const {Schema, model} = require('mongoose');

const schemaProducto = new Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    imagen: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'CategoriaProducto'
    },
});

module.exports = model('Producto', schemaProducto);
