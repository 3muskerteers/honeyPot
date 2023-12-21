import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
    dateOfPayment: {
        type: Date,
        required: true,
    },
    amountPaid: {
        type: Number,
        required: true,
    },
    balance: Number,
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true,
    },
});

const Payments = mongoose.model("Payments", paymentsSchema);
export default Payments;
