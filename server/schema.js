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
        regNo:{
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        }
    }
);

const iotData = mongoose.model("iotData", iotSchema);

export default iotData;