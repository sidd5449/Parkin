import slotData from "../schemas/slotData.js";

export const getSlotsController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const slotsData = await slotData.find({ spot: id }).sort({id : 1});
    res.status(200).json(slotsData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
