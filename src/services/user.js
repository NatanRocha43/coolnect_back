userService = {}

userService.add = async (req, res) => {

  return res.status(200).json({
    user: req.body
  });
}

module.exports = userService
