import jwt from 'jsonwebtoken';
import {User} from '../../models/index.models.js';
 
const protect = async (req, res, next) => {
  try {
    let token;

    //read JWT from the cookie
    token = req.cookies.jwt;
  
    
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      
      next();
    } else {
      res.status(401).json({ error: 'Not authorized, token is missing' });
    }
  } catch (error) {
    res.status(401).json({ error: 'Not authorized, token is invalid' });
  }
}

//admin middleware

// TODO :
//FIX :ROLES NOT WORKING
const admin = (req, res, next) => {
  console.log(req.user)
 
  if(req.user && (req.user.role === "admin")){
    next();
  }else{
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
}

const authenticateToken = (req, res, next) => {
  console.log(req.headers)
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  });
};


export  {protect, admin,authenticateToken};