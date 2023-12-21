import mongoose from "mongoose";

const invoicesSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    foodCategories: {
        type: String, // Assuming it's a string, adjust as needed
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true,
    },
});

const Invoices = mongoose.model("Invoices", invoicesSchema);
export default Invoices;
