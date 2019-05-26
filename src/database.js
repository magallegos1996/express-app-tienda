const mongoose = require ('mongoose');

const URI = 'mongodb://localhost/app-tienda';
async function connectDB() {
    await mongoose.connect(URI,
        {
            useNewUrlParser: true,
        }
    );
    console.log('Database connected');
}
module.exports = { connectDB };