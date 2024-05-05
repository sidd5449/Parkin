import mongoose from "mongoose";

const spotSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  // slots: [
  //   {
  //     slotId: String,
  //   },
  // ],
});

const spot = mongoose.model("Spot", spotSchema);

export default spot;
