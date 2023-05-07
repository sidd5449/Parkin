import React from 'react';
import { userInfo } from '../utils'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Receipt = () => {

    const slot = useParams();
    console.log(slot);
    const timestamp = new Date;
    console.log(timestamp);
    const day = timestamp.get;
    const date = timestamp.getDate();
    const month = timestamp.getMonth();
    const year = timestamp.getFullYear();
    const time = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
    console.log(time);
    return (
    <div className="app__receipt">
        <Navbar />
            <div className="app__receipt-cont">
            <h1>Booking Receipt</h1>
            <h2>{userInfo.name}</h2>
            <p>Vehicle Number: {userInfo.regNo}</p>
            <p>Booked Slot: {slot.id}</p>
            <p>Date: {date}/{month+1}/{year}</p>
            <p>Time: {time}</p>
            </div>
    </div>
  )
}

export default Receipt