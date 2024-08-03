// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/coolnect');
        console.log('MongoDB conectado com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1); // Encerra o processo com falha
    }
};

module.exports = connectDB;
