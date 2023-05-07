import mongoose from "mongoose";

const iotSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            required: true,
        },
        booked: {
            type: Number,
            required: false,
            default: 0,
        }
    }
);

const iotData = mongoose.model("iotData", iotSchema);

export default iotData;