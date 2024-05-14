import { FiMaximize } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import "./Onboard.css";

const Onboard = () => {
  return (
    <div className="login-container">
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

      <p className="text1">
        Some random dummy adress which you’ll never find in this mortal world
      </p>

      <p className="text2">4-wheeler: 20 2-wheeler: 20</p>

      <div className="hero" style={{ marginTop: "33px" }}>
        <a href="/verify">
          <button
            className="but-1"
            style={{ color: "#ffff", margin: "auto", width: "50%" }}
          >
            <FiMaximize
              style={{
                fontSize: "52px",
                margin: "auto",
                width: "50%",
              }}
            />
            <h3 style={{ marginTop: "25px" }}>Scan QR Code</h3>
          </button>
        </a>

        <button
          className="but-2"
          style={{
            color: "#ffff",
            margin: "auto",
            width: "50%",
            marginTop: "50px",
          }}
        >
          <FiUserPlus
            style={{
              fontSize: "52px",
              margin: "auto",
              width: "50%",
            }}
          />
          <h3 style={{ marginTop: "25px" }}>On Site Booking</h3>
        </button>
      </div>
    </div>
  );
};

export default Onboard;
