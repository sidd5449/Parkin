import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
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

const slotData = mongoose.model("slotData", slotSchema);

export default slotData;
