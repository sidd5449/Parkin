import slotData from "../schemas/slotData.js";

export const unbookController = async (req, res) => {
  try {
    const filter = { id: req.params.id };
    const slot = await slotData.findOne(filter);
    if (slot.booked === 0) {
      res.status(401).json({ message: "Already unbooked" });
    } else {
      const updata = {
        $set: {
          booked: 0,
        },
      };
      await slotData.updateOne(filter, updata);
      res.status(200).json({ message: "Unbooked" });
    }
  } catch (error) {
    if (error.response.status) {
      res.status(error.response.status).json({ message: error.message });
    } else {
      res.json({ message: error.message });
    }
  }
};
