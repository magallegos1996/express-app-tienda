const app = require('./app');
const { connectDB } = require('./database');


async function main() {
    //Se conecta a la DB
    await connectDB();
    console.log('Database connected');
    //Inicia servidor Express
    await app.listen(app.get('port'));
    console.log('Server on port ' + app.get('port') + ': connected' );
}

//llamamos a la funcion
main();

