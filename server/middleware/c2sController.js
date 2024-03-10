import slotData from '../schemas/slotData.js';


const releaseSlot = async(id) => {
    const filter = { id: id };
    const updata = {
        $set: {
            status: 1
        }
    }
    await slotData.updateOne(filter, updata);
    console.log("released");
};
const fillSlot = async(id) => {
    const filter = { id: id };
    const updata = {
        $set: {
            status: 0
        }
    }
    await slotData.updateOne(filter, updata);
    console.log("filled");
};

export const c2sController = async(req, res) => {
    try {
        console.log(req);
        const data = req.body;
        console.log(data);
        data.map(async(item) => {
            console.log(item);
            if(item.occupied === 0){
                await releaseSlot(item.id);
            }
            if(item.occupied === 1){
                await fillSlot(item.id);
            }
        })
        res.status(201).json("Data updated");
    } catch (err) {
        res.status(400);
    }
}; 