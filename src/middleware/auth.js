const jwt = require('jsonwebtoken');
const SECRET_KEY = 'coolnect123'; 

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verifica o token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Adiciona as informações do usuário decodificadas à requisição
    next(); // Permite que a requisição prossiga
  } catch (err) {
    return res.status(400).json({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;
