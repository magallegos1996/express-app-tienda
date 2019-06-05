const {Schema, model} = require('mongoose');

const schemaCategoriaProducto = new Schema({
    nombre: {type: String, required: true, unique: true},
    productos: [{type: Schema.Types.ObjectId, ref: 'Producto'}]
});

module.exports = model('CategoriaProducto', schemaCategoriaProducto);