import React from "react";
import { FiX } from "react-icons/fi";

const ScanFail = () => {
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
          <FiX style={{ color: "red", fontSize: "200px", marginTop: "14px" }} />
        </button>

        <p style={{ marginLeft: "25px" }}>
          User Not Verified For Slot Number : 2
        </p>
      </div>
    </div>
  );
};

export default ScanFail;
