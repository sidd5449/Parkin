import React from "react";
import { FiCheck } from "react-icons/fi";

const ScanSuccess = () => {
  return (
    <div>
      <h1
        className="heading"
        style={{
          fontFamily: "'Krona One', sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "29px",
        }}
      >
        PARKIN'
      </h1>
      <h2
        className="heading1"
        style={{ marginTop: "45px", fontSize: "36px", marginBottom: "60px" }}
      >
        Spot Name
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            padding: "27px",
            borderRadius: "50%",
            border: "5px solid #7e7e7e",
            marginBottom: "60px",
            backgroundColor: "#BEBEBE",
          }}
        >
          <FiCheck
            style={{ color: "green", fontSize: "200px", marginTop: "34px" }}
          />
        </button>

        <p style={{ marginLeft: "25px" }}>User Verified For Slot Number : 2</p>
        <button
          style={{
            border: "2px solid orange",
            fontSize: "18px",
            padding: "18px 0px 18px 0px",
            color: "white",
            borderRadius: "22px",
            marginTop: "30px",
          }}
        >
          Raise Barrier
        </button>
      </div>
    </div>
  );
};

export default ScanSuccess;
