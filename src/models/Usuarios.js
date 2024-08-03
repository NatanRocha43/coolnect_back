// models/Usuarios.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  fone: {
    type: String,
    required: true
  },
  email_pessoal: {
    type: String,
    required: true,
    unique: true
  },
  email_institucional: {
      type: String,
      required: true,
      unique: true
  },
  seguranca_1: {
    type: String,
    required: true
  },
  seguranca_2: {
    type: String,
    required: true
  },
  seguranca_3: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

const Usuarios = mongoose.model('usuarios', UsuarioSchema);

module.exports = Usuarios;
