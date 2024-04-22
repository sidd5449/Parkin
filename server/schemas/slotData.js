import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
  },
  booked: {
    type: Number,
  },
  orderId: {
    type: String,
  },
  bookedFrom: {
    type: String,
  },
  bookedTo: {
    type: String,
  },
  vehicleNo: {
    type: String,
  },
  idNumber: {
    type: String,
  },
});

const slotData = mongoose.model("slotData", slotSchema);

export default slotData;
