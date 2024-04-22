import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
  },
  transactionID: {
    type: Number,
  },
});

const order = mongoose.model("Order", orderSchema);

export default order;
