const {Schema, model} = require('mongoose');

const schemaUsuario = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    correoElectronico: {type: String, required: true},
    tarjetasCredito: [{
        empresa: {type: String, required: true},
        numero: {type: String, required: true},
        mes: {type: String, required: true},
        anio: {type: String, required: true},
        codigo: {type: String, required: true}
    }]
});

module.exports = model('Usuario', schemaUsuario);