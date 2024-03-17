const jwt = require('jsonwebtoken');

require("dotenv").config();
const SecretKey = process.env.SecretKey;

exports.verifyTokenMiddleware = (req, res, next) => {
    const token = req.body; // Token in the Authorization header
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token.token, SecretKey, (err, decoded) => {
      if (err) {
        console.log(err); 
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }
      req.decoded = decoded;
      next();
    });
  };
