import spot from "../schemas/spot.js";

export const spotController = async (req, res) => {
  try {
    const data = await spot.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: "Spots not found" });
  }
};
