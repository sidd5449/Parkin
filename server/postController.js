import iotData from "./schema.js"


export const fillSlot = async(req, res) => {
    try {
        console.log(req);
        const { id } = req.params;
        console.log(id);
        const filter = { id: id };
        const updata = {
            $set: {
                status: 0
            }
        }
        try {
            await iotData.updateOne(filter, updata);
            res.status(200).json(updata);
            console.log('updated');
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

export const releaseSlot = async(req, res) => {
    try {
        console.log(req);
        const { id } = req.params;
        console.log(id);
        const filter = { id: id };
        const updata = {
            $set: {
                status: 1
            }
        }
        try {
            await iotData.updateOne(filter, updata);
            res.status(200).json(updata);
            console.log('updated');
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}