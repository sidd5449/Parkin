import { setSlotId } from "../index.js";

export const toggleBarrierController = async (req, res) => {
  try {
    const toggleSlot = req.body.id;
    setSlotId(toggleSlot);
    res.status(200).json({ message: "requested to toggle" });
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ message: error.message });
    } else {
      res.json({ message: error.message });
    }
  }
};
