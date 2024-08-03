// models/Usuarios.js
const mongoose = require('mongoose');

const EventosSchema = new mongoose.Schema({
  id_usuario: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: false
  },
  curtidas: {
    type: Number,
    required: false
  }
});

const Eventos = mongoose.model('eventos', EventosSchema);

module.exports = Eventos;
