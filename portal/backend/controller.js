import slotData from "./schema.js";

export const getSensData = async(req, res) =>{
    try {
        const sensData = await slotData.find();
        res.status(200).json(sensData);
        
    } catch (err) {
        res.status(404).json({message: err.message})
        
    }
}

export const updateStat = async(req, res) => {
    try {
        console.log(req);
        const { id } = req.params;
        console.log(id);
        const filter = { id: id };
        const updata = {
            $set: {
                booked: 1
            }
        }
        try {
            await slotData.updateOne(filter, updata);
            res.status(200).json(updata);
            console.log('updated');
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

export const getSpecific = async(req, res) => {
    try {
        const { id } = req.params;
        const slot = await slotData.findOne({ id:id });
        res.json(slot);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}
