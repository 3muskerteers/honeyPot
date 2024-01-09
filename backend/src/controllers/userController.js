import { User } from '../../models/index.models.js';
import jwt from 'jsonwebtoken';
// @desc register user
// @route POST api/users/REGISTER
// @access Public

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    try {
      if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        });

        // set JWT as http only cookie
        res.cookie('jwt', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          sameSite: 'strict',
        });

        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc register user
// @route POST api/users/REGISTER
// @access Public

const registerUser = async (req, res) => {
  try {
    const { name, email, password, contact, address, location, role } =
      req.body;

    return res
      .status(200)
      .json({ name, email, password, contact, address, location, role });

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
      // generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc logout  user
// @route POST api/users/logout
// @access Private

const logoutUser = async (req, res) => {
  try {
    res.send('logout user');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc register user
// @route GET api/users/profile
// @access Private

const getUserProfile = async (req, res) => {
  try {
    res.send('get profile user');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc update user
// @route PUT api/users/profile
// @access Private

const updateUserProfile = async (req, res) => {
  try {
    res.send('get profile user');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc get users
// @route GET api/users
// @access Private/admin

const getUsers = async (req, res) => {
  try {
    res.send('get users');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc get users by ID
// @route GET api/users/:id
// @access Private/admin

const getUserByID = async (req, res) => {
  try {
    res.send('get user by ID');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc delete user
// @route DELETE api/users/:id
// @access Private/admin

const deleteUser = async (req, res) => {
  try {
    res.send('delete user');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

// @desc update user
// @route PUT api/users/:id
// @access Private/admin

const updateUser = async (req, res) => {
  try {
    res.send('update users');
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
