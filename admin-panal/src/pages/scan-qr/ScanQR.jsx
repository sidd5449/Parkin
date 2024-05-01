import React from "react";
import "./ScanQR.css";
import { FiMaximize } from "react-icons/fi";
import { AiOutlineScan } from "react-icons/ai";

const ScanQR = () => {
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
      <h2 className="heading1">Spot Name</h2>
      <div style={{ display: "flex" }}>
        <FiMaximize
          style={{
            fontSize: "62px",
            color: "white",
            marginTop: "32px",
          }}
        />
        <p style={{ marginTop: "42px", marginLeft: "32px" }}>
          Scan QR Code provided to user while booking the slot
        </p>
      </div>
      <button
        style={{
          padding: "10px",
          border: "2px solid orange",
          marginTop: "70px",
          borderRadius: "22px",
          marginLeft: "-1px",
        }}
      >
        <AiOutlineScan
          style={{
            fontSize: "300px",
            color: "white",

            margin: "auto",
            marginTop: "9px",
            marginLeft: "-5px",
          }}
        />
      </button>
    </div>
  );
};

export default ScanQR;
