import { setSlotId } from "../index.js";

import {setSlotId} from "../index.js";

export const toggleBarrierController = async (req,res)=>{
    try{
        var toggleSlot = req.body.id;
        setSlotId(toggleSlot);
        res.status(200).json({message: "requested to toggle"});
    }catch(error){
        if (error.response) {
        res.status(error.response.status).json({ message: error.message });
        } else {
        res.json({ message: error.message });
        }
    }
}
var slotId = "-1";

wss.on("connection", function connection(ws) {
  console.log("Arduino WebSocket client connected");
  //can comment above line if not necessary

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  ws.send(slotId);
  slotId = "-1";
});
