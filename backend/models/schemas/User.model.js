import mongoose from "mongoose";

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
    contact: {
        type: String,
        required: true,
    },
    address: String,
    location: String,
    role: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

export default User;
