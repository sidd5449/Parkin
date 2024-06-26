import React, { useState, useEffect } from "react";
import axios from "axios";
import SlotCard from "../../components/SlotCard/SlotCard";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

const SpotInfo = () => {
  const [spot, setspot] = useState(null);
  const [slots, setslots] = useState(null);
  const { id } = useParams();
  console.log(id);
  if (spot === null) {
    axios.get(`https://parkinwebportal.loca.lt/spot/${id}`).then((data) => {
      setspot(data.data);
    });
  }
  if (slots === null && spot !== null) {
    axios
      .get(`https://parkinwebportal.loca.lt/getSlots/${id}`)
      .then((slots) => {
        setslots(slots.data);
      });
  }
  console.log(slots);

  if (spot !== null && slots !== null) {
    return (
      <div className="app_spotinfo" style={{}}>
        <Header />
        <p>{spot.name}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {slots.map((slot) => (
            <a href={`/slot/${slot.unId}`}>
              <SlotCard
                booked={slot.booked}
                status={slot.status}
                id={slot.id}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
};

export default SpotInfo;
