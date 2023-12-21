import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
    reviewRate: {
        type: Number,
        required: true,
    },
    reviewDescription: String,
    reviewDate: {
        type: Date,
        default: Date.now,
    },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

export default Reviews;
