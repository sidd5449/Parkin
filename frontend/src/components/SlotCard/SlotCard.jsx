import React from "react";
import bgImgBooked from "../../assets/slotBgBooked.png";
import bgImgOccupied from "../../assets/slotBgOccupied.png";

const SlotCard = (props) => {
  const isBooked = props.booked;
  const isOccupied = props.status;

  const bgUrl = () => {
    if (isOccupied === 0) {
      return "url(" + bgImgOccupied + ")";
    }
    if (isBooked === 1 && isOccupied === 1) {
      return "url(" + bgImgBooked + ")";
    }
    // console.log(bgImg);
  };
  console.log(bgUrl());
  return (
    <div
      className="app__slotcard"
      style={{ margin: "30px 0", width: "150px", height: "80px" }}
    >
      <hr
        style={{
          backgroundColor: "#000",
          borderTop: "2px dotted #656565",
          borderBottom: "#656565",
          margin: "10px 0",
        }}
      />
      <div
        className="app__slotcard-info"
        style={{
          backgroundImage: bgUrl(),
          width: "150px",
          height: "80px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <p style={{ transform: "rotate(90deg)", fontWeight: "600" }}>
          {props.id}
        </p>
      </div>
      <hr
        style={{
          backgroundColor: "#000",
          borderTop: "2px dotted #656565",
          borderBottom: "#656565",
          margin: "10px 0",
        }}
      />
    </div>
  );
};

export default SlotCard;
