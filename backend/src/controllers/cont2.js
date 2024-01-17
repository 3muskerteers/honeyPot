import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';
import { User } from '../../models/index.models.js';

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ...

const registerUser = async (req, res) => {
  try {
    const { name, email, password, contact, address, location, role } =
      req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('user already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
      contact,
      address,
      location,
      role,
    });

    if (user) {
      const token = generateToken(user._id);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ...