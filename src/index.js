const app = require('./app');


async function main() {
    //Inicial servidor Express
    await app.listen(app.get('port'));
    console.log('Server on port ' + app.get('port') + ': connected' );
}

//llamamos a la funcion
main();

