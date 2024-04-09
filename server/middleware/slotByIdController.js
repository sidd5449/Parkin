import slotData from "../schemas/slotData.js";

export const slotByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const slot = await slotData.findOne({ id:id });
        res.json(slot);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}