import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuid4 } from "uuid";

const Booking = () => {
  const { id } = useParams();
  const [slot, setslot] = useState(null);
  const [hour, sethour] = useState(0);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js",
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const paymentId = uuid4();
    const data = [
      {
        id: paymentId,
        price: hour * 200,
      },
    ];
    const result = await axios.post("https://tr7fv5-6001.csb.app/pay", data);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5000/payment/success",
          data,
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  if (slot === null) {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/slot/${id}`).then((data) => {
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
            onClick={displayRazorpay}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    );
  }
};

export default Booking;
