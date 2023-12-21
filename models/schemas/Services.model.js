import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    servicePrice: {
        type: Number,
        required: true,
    },
});

const ServicesOffered = mongoose.model("ServicesOffered", servicesSchema);

export default ServicesOffered;
