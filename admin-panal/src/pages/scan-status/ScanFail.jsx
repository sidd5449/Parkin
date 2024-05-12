import React from "react";
import { FiX } from "react-icons/fi";
import "./style.css";
import { useParams } from "react-router";

const ScanFail = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #601f03, #000000)",
        padding: "40px 29px",
      }}
    >
      <h1
        className="heading"
        style={{
          fontFamily: "'Krona One', sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "22px",
        }}
      >
        PARKIN'
      </h1>
      <h2
        className="heading1"
        style={{ marginTop: "45px", fontSize: "36px", marginBottom: "60px" }}
      >
        COEP ENTC Parking
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
            width: "223px",
            height: "223px",
            borderRadius: "50%",
            border: "5px solid #7e7e7e",
            margin: "auto",
            backgroundColor: "#BEBEBE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FiX style={{ color: "red", fontSize: "200px", marginTop: "14px" }} />
        </button>

        <p style={{ margin: "25px auto" }}>
          User Not Verified For Slot Number : {id}
        </p>
      </div>
    </div>
  );
};

export default ScanFail;
