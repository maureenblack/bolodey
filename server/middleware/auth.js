const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
module.exports = authMiddleware;
//This middleware function extracts the token from the request headers.
//It verifies the token using the secret key.
//If the token is valid, it attaches the decoded user information to the request object.
//If the token is invalid, it returns a 401 Unauthorized response.