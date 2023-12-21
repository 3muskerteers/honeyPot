import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    bookingTime: {
        type: Date,
        required: true,
    },
    typeOfEvent: String,
    people: Number,
    eventDuration: {
        start: Date,
        end: Date,
    },
    location: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
