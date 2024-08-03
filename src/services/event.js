const Eventos = require('../models/Eventos');
const connectDB = require('../config/database');

connectDB();

eventService = {}

eventService.add = async (req, res) => {
  try {
    const newEvent = new Eventos(req.body);
    const result = await newEvent.save();
  
    return res.status(200).json(result);

  } catch (error) {
    return res.status(422).json({
      message: "Erro no cadastro de evento",
      error
    })
  }
}

eventService.curtir = async (req, res) => {
  try {
    const data = req.body;
    
    const evento = await Eventos.findOne({
      _id: data.id
    });

    if (!evento) {
      return res.status(422).json({
        message: "Evento não encontrado"
      });
    }

    let curtidas = evento.curtidas;
    curtidas = curtidas + 1;
    const curtidasAtualizadas = curtidas;

    await Eventos.findOneAndUpdate({ _id: evento.id }, { curtidas: curtidasAtualizadas });

    return res.status(200).json({
      message: "Evento curtido com sucesso!"
    })
  } catch (error) {
    return res.status(422).json({
      message: "Erro inesperado para curtir evento!",
      error
    })
  }
}

eventService.get = async (req, res) => {
  try {
    const eventos = await Eventos.find();

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
module.exports = eventService
