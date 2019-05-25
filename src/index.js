const express = require('express');
const app = require('./app');


async function main() {
    //Inicial servidor Express
    await app.listen(4000);
    console.log('Server on port 4000: connected')
}

//llamamos a la funcion
main();

