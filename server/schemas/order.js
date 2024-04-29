import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  transactionID: {
    type: String,
  },
});

const order = mongoose.model("Order", orderSchema);

export default order;
