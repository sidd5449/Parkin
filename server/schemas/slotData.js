import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  unId: {
    type: String,
  },
  spot: {
    type: String,
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
    // required: true,
    default: null,
  },
  idNumber: {
    type: String,
    // required: true,
    default: null,
  },
  lattitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

const slotData = mongoose.model("slotData", slotSchema);

export default slotData;
