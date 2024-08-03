// models/Usuarios.js
const mongoose = require('mongoose');

const GruposSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  id_usuario_admin: {
    type: String,
    required: true
  }
});

const Grupos = mongoose.model('grupos', GruposSchema);

module.exports = Grupos;
