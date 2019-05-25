const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.set('port', process.env.PORT || 4000); //Se configura el puerto en el se va a iniciar el servidor de forma dinámica. Tomará el puerto del SO y si no hay usará el puerto por defecto, en este caso el 4000

module.exports = app;