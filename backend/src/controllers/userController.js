import { User } from "../../models/index.models.js";


// import { generateToken } from "../utils/auth";

// @desc register user 
// @route POST api/users/REGISTER
// @access Public

const registerUser = async (req, res) => {
  try {
    const { name, email, password, contact, address, location, role } = req.body;

    return res.status(200).json({ name, email, password, contact, address, location, role })

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("user already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
      contact,
      address,
      location,
      role
    });

    if (user) {
      // generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

export { registerUser }
