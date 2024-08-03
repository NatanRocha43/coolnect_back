const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const connectDB = require('../config/database');
const Usuarios = require('../models/Usuarios');

connectDB();

userService = {}

userService.add = async (req, res) => {

  try {
    const newUser = new Usuarios(req.body);
    const result = await newUser.save();
  
    return res.status(200).json(result);

  } catch (error) {
    return res.status(422).json({
      message: "Erro no cadastro de usuário",
      error
    })
  }
}

userService.login = async (req, res) => {
  try {
    const data = req.body;

    const user = await Usuarios.findOne({ email_pessoal: data.email_pessoal });
    if (!user) {
      
      return res.status(422).json({
        message: "Usuário não encontrado"
      });
    }

    const isMatch = await bcrypt.compare(data.senha, user.senha);
    if (!isMatch) {
      return res.status(422).json({
        message: "Senha incorreta"
      });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email_pessoal },
      "coolnect123",
      { expiresIn: '1h' } // Define o tempo de expiração do token
    );



    return res.status(200).json({
      login: 'OK',
      token,
      user
    })
  } catch (error) {
    
  }
}

userService.senha = async (req, res) => {
  try {
    const data = req.body;

    const user = await Usuarios.findOne({ email_pessoal: data.email_pessoal });
    if (!user) {
      return res.status(422).json({
        message: "Usuário não encontrado"
      });
    }

    if (data.seguranca_1 !== user.seguranca_1) {
      return res.status(422).json({
        message: "Pergunta 1 incorreta"
      });
    }
    if (data.seguranca_2 !== user.seguranca_2) {
      return res.status(422).json({
        message: "Pergunta 2 incorreta"
      });
    }
    if (data.seguranca_3 !== user.seguranca_3) {
      return res.status(422).json({
        message: "Pergunta 3 incorreta"
      });
    }

    await Usuarios.findOneAndUpdate({ _id: user._id }, { senha: data.senha });

    return res.status(200).json({
      message: "Senha atualizada com sucesso!"
    })
  } catch (error) {
    return res.status(422).json({
      message: "Erro inesperado para atualizar a senha!",
      error
    })
  }
}

module.exports = userService
