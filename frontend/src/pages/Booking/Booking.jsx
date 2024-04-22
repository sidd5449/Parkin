import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Razorpay from "razorpay";
import useRazorpay from "react-razorpay";
import { v4 as uuid4 } from "uuid";

const Booking = () => {
  const { id } = useParams();
  const [slot, setslot] = useState(null);
  const [hour, sethour] = useState(0);
  const [Razorpay] = useRazorpay();

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_oNSpwBXKYtx6rB",
      amount: data.amount,
      currency: data.currency,
      name: "Slot booking",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "https://tr7fv5-6001.csb.app/pay/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "https://tr7fv5-6001.csb.app/pay/orders";
      const { data } = await axios.post(orderUrl, { amount: hour * 200 });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (slot === null) {
    axios.get(`https://tr7fv5-6001.csb.app/slot/${id}`).then((data) => {
      setslot(data.data);
    });
  }
  // console.log(slot);

  // console.log(id);

  const incHour = () => {
    sethour(hour + 1);
  };
  const decHour = () => {
    sethour(hour - 1);
  };

  if (slot !== null) {
    return (
      <div>
        <Header />
        <div
          className="app__booking-slot"
          style={{
            display: "flex",
            flexDirection: "column",
            placeContent: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            className="app__slot-no"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10vh",
              height: "169px",
              alignItems: "center",
            }}
          >
            <hr
              style={{
                height: "100%",
                color: "#656565",
                border: "2px dotted #656565",
              }}
            />
            <h2 style={{ fontSize: "100px", color: "rgba(210,210,210,0.17)" }}>
              A-{slot.id}
            </h2>
            <hr
              style={{
                height: "100%",
                color: "#656565",
                border: "2px dotted #656565",
              }}
            />
          </div>
          <div className="slot-info" style={{ marginTop: "6vh" }}>
            <p style={{ fontWeight: 500 }}>Type: 4-Wheeler</p>
            <p style={{ marginTop: "8px", fontWeight: 500 }}>
              Booking Rate: INR {process.env.REACT_APP_RATE}/hour
            </p>
          </div>
          <div className="slot-inputs">
            <input type="text" placeholder="Vehicle Number..." />
            <input type="text" placeholder="ID Number..." />
          </div>
          <div
            className="slot-hours"
            style={{
              display: "flex",
              gap: "6vw",
              marginTop: "6vh",
              alignItems: "center",
            }}
          >
            <button className="sign-btns" onClick={incHour}>
              +
            </button>
            <p>{hour}</p>
            <button className="sign-btns" onClick={decHour}>
              -
            </button>
            <h3
              style={{
                fontWeight: "700",
                color: "#ff7a00",
                fontFamily: "'Krona One', sans-serif",
              }}
            >
              INR {hour * 200}
            </h3>
          </div>
          <button
            style={{
              backgroundColor: "#ff7a00",
              marginTop: "8vh",
              padding: "2vh 1vh",
              borderRadius: "1vh",
              color: "#fff",
              fontWeight: "500",
            }}
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    );
  }
};

export default Booking;
