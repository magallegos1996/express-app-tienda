const {Schema, model} = require('mongoose');
const Producto = require('./Producto');


const schemaCategoriaProducto = new Schema({
    nombre: {type: String, required: true, unique: true},
    productos: [{type: Schema.Types.Object, ref: 'Producto'}]
});

module.exports = model('CategoriaProducto', schemaCategoriaProducto);