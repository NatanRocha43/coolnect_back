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

  return res.status(200).json({
    user: req.body
  });
}

module.exports = userService
