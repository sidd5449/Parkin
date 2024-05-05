import React, { useState } from "react";
import SpotCard from "../../components/SpotCard/SpotCard";
import SlotCard from "../../components/SlotCard/SlotCard";
import Header from "../../components/Header/Header";
import axios from "axios";
const Dashboard = () => {
  const [spots, setspots] = useState(null);
  if (spots === null) {
    axios.get("https://tr7fv5-6001.csb.app/spots").then((data) => {
      setspots(data.data);
    });
  }
  if (spots !== null) {
    return (
      <div>
        <Header />
        {spots.map((spot) => (
          <a href={`https://tr7fv5-6002.csb.app/spot/${spot.id}`}>
            <SpotCard
              spotTitle={spot.name}
              spotAddress="Some random dummy adress you’ll never find in this mortal world"
              fours={20}
              twos={20}
            />
          </a>
        ))}
      </div>
    );
  }
};

export default Dashboard;
