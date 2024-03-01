import slotData from "../schemas/slotData.js";

export const bookController = async (req, res) => {
  try {
    const filter = { id: req.params.id };
    const slot = await slotData.findOne(filter);
    if (slot.booked === 1) {
      res.status(401).json({ message: "Already booked" });
    } else {
      const updata = {
        $set: {
          booked: 1,
        },
      };
      await slotData.updateOne(filter, updata);
      res.status(200).json({ message: "Booked" });
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ message: error.message });
    } else {
      res.json({ message: error.message });
    }
  }
};
