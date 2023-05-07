// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
import { bgColor } from "../../data";
import "./Layout.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Layout = () => {
  const [data, setdata] = useState([]);

    useEffect(() => {
      axios.get('https://iot-server-yt0y.onrender.com/').then((data) => {
      setdata(data.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="app__layout">
      <div className="app__layout-heading">
        <h2>COEP ENTC Parking</h2>
      </div>
      <div className="app__layout-schematic">
        {data.map((item, key) => (
          <a href={item?.id} className='app__link'>
          <div className="app__layout-schematic-cont" style={{backgroundColor: bgColor(item.status, item.booked)}} key= {key}>
            <p>Slot: {item.id}</p>


          </div>
          </a>
        ))}
      </div>
    </div>

    // QR Code
  );
};

export default Layout;
