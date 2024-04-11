import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
        },
        booked:{
            type:Number,
        }
    }
);

const slotData = mongoose.model("slotData", slotSchema);

export default slotData;