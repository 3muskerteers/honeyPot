import mongoose from 'mongoose';
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: String,
  location: String,
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'manager'],
    default: 'user',
  },
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword,this.password)
}

const User = mongoose.model('User', userSchema);

export default User;
 