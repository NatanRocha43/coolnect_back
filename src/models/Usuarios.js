// models/Usuarios.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

UsuarioSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) {
      return next();
  }
  try {
      const salt = await bcrypt.genSalt(10);
      this.senha = await bcrypt.hash(this.senha, salt);
      next();
  } catch (err) {
      next(err);
  }
});

UsuarioSchema.pre('findOneAndUpdate', async function(next) {
  const update = this.getUpdate();
  if (update.senha) {
      try {
          const salt = await bcrypt.genSalt(10);
          update.senha = await bcrypt.hash(update.senha, salt);
      } catch (err) {
          return next(err);
      }
  }
  next();
});
const Usuarios = mongoose.model('usuarios', UsuarioSchema);

module.exports = Usuarios;
