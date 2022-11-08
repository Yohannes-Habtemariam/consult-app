import mongoose from "mongoose";

const { Schema } = mongoose;

const serviceSchema = new Schema({
    userId: {type: String, required: true, unique: true},
    services: [
        {
            serviceId: {type: String},
            quantity: {type: Number, default: 1}
        }
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: "pending"}
}, {timestamps: true });



const Service = mongoose.model("Service", serviceSchema);

export default Service;