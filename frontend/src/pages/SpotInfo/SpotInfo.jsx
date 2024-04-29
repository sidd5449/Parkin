import React, { useState, useEffect } from "react";
import axios from "axios";
import SlotCard from "../../components/SlotCard/SlotCard";

const SpotInfo = () => {
  const [slots, setslots] = useState(null);

  if (slots === null) {
    axios.get("https://tr7fv5-6001.csb.app/getSlots").then((data) => {
      setslots(data.data);
    });
  }
  console.log(slots);

  if (slots !== null) {
    return (
      <div className="app_spotinfo">
        {slots.map((slot) => (
          <a href={`/slot/${slot.id}`}>
            <SlotCard booked={slot.booked} status={slot.status} id={slot.id} />
          </a>
        ))}
      </div>
    );
  }
};

export default SpotInfo;
