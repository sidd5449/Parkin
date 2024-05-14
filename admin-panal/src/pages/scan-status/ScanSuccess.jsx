import React from "react";
import { FiCheck } from "react-icons/fi";
import "./style.css";
import { useParams } from "react-router";
import axios from "axios";

const ScanSuccess = () => {
  const { id } = useParams();
  const raiseBarr = (slid) => {
    axios.post("https://parkinwebportal.loca.lt/toggleBarrier", {
      id: slid,
    });
  };
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #036007, #000000)",
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
          <FiCheck
            style={{ color: "green", fontSize: "200px", marginTop: "34px" }}
          />
        </button>

        <p style={{ margin: "auto", paddingTop: "20px" }}>
          User Verified For Slot Number : {id}
        </p>
        <button
          style={{
            border: "2px solid orange",
            fontSize: "14px",
            color: "white",
            padding: "12px 18px",
            borderRadius: "4px",
            margin: "30px auto",
            width: "max-content",
          }}
          onClick={() => {
            axios.post("https://parkinwebportal.loca.lt/toggleBarrier", {
              id: id,
            });
          }}
        >
          Close Barrier
        </button>
      </div>
    </div>
  );
};

export default ScanSuccess;
