const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const app = express();

//Configuracion del servidor
app.set('port', process.env.PORT || 4000); //Se configura el puerto en el se va a iniciar el servidor de forma dinámica. Tomará el puerto del SO y si no hay usará el puerto por defecto, en este caso el 4000
app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); //con este metodo nos ayudará a que el servidor pueda entender los datos que vengan desde el navegador. Se tomarán estos datos con req.body

module.exports = app;
