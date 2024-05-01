import mongoose from "mongoose";
import spot from "../schemas/spot.js";
// import slotData from "../schemas/slotData.js";

export const spotByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const spotData = await spot.findOne({ id: id });
    console.log(spotData);
    res.status(200).json(spotData);
  } catch (err) {
    res.status(404).json({ message: "Spot not found" });
  }
};
