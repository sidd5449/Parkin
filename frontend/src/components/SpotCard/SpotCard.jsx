import React from "react";
import "./SpotCard.scss";

const SpotCard = (props) => {
  return (
    <div className="app__spotcard">
      <h2>{props.spotTitle}</h2>
      <p>{props.spotAddress}</p>
      <div className="app__spotcard-vehinfo">
        <div className="vehinfo-fours">
          <p>4-wheeler: </p>
          <p>{props.fours}</p>
        </div>
        <div className="vehinfo-twos">
          <p>2-wheeler: </p>
          <p>{props.twos}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SpotCard;
