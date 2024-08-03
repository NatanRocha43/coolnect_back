// models/Usuarios.js
const mongoose = require('mongoose');

const GrupoIntegrantesSchema = new mongoose.Schema({
  id_usuario: {
    type: String,
    required: true
  },
  id_grupo: {
    type: String,
    required: true
  }
});

const GrupoIntegrantes = mongoose.model('grupo_integrantes', GrupoIntegrantesSchema);

module.exports = GrupoIntegrantes;
