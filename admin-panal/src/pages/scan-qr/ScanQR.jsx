import React, { useState } from "react";
import "./ScanQR.css";
import { FiMaximize } from "react-icons/fi";
import { AiOutlineScan } from "react-icons/ai";
import { Scanner } from "@yudiel/react-qr-scanner";
import axios from "axios";
import WebSocket from "ws";
const ScanQR = () => {
  const [data, setdata] = useState(null);
  const [dbData, setdbData] = useState(null);
  const sendWsId = (id) => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.on("open", function open() {
      console.log("Connected to WebSocket server");

      // Send a message to the server
      ws.send("Hello, server! This is the WebSocket client.");
    });

    // Event listener for messages received from the server
    ws.on("message", function incoming(message) {
      console.log("Received: %s", message);
    });
  };
  if (data !== null && dbData === null) {
    const splits = data.split(",");
    const slotId = splits[0];
    const payId = splits[2];
    axios.get("https://tr7fv5-6001.csb.app/slot/slotId").then((item) => {
      setdbData(item.data);
    });
    if (dbData.order_id === payId) {
      console.log("Success");
    }
    if (dbData.order !== payId) {
      console.log("fail");
    }
  }
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
      <Scanner
        onResult={(text, result) => setdata(text)}
        onError={(error) => console.log(error?.message)}
      />
      <p>{data}</p>
    </div>
  );
};

export default ScanQR;
