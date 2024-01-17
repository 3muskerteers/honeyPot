import { User } from '../../models/index.models.js';
import generateToken from '../utils/generateToken.js';
import jwt from 'jsonwebtoken';


// @desc register user
// @route POST api/users/REGISTER
// @access Public



const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email });
    // console.log(user)

    try {
      if (user && (await user.matchPassword(password))) {
        const token = generateToken(user._id);

        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token, // Include the token in the response
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

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
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

    //TODO : ERROR HANDLING ON REGISTER

    if (user) {
      const token = generateToken(user._id);

      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token, // Include the token in the response
      });
    } else {
      return res.status(400).json({ error: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// @desc logout  user
// @route POST api/users/logout
// @access Private
// FIX:
const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires:new Date(0)
    })

    res.status(200).json({message:"logged out successfully"})
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
    // console.log(req)
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
    const users = await User.find({});
    res.json(users);
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
