const Grupos = require('../models/Grupos');
const connectDB = require('../config/database');

connectDB();

groupService = {}

groupService.add = async (req, res) => {
  try {
    const newGroup = new Grupos(req.body);
    const result = await newGroup.save();
  
    return res.status(200).json(result);

  } catch (error) {
    return res.status(422).json({
      message: "Erro no cadastro de grupos",
      error
    })
  }
}

groupService.get = async (req, res) => {
  try {
    const grupos = await Grupos.find();

    return res.status(200).json({
      eventos
    })
  } catch (error) {
    return res.status(422).json({
      message: "Erro na consulta de evento",
      error
    })
  }
}
module.exports = groupService
