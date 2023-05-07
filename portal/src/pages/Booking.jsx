import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import SlotInfo from '../components/SlotInfo/SlotInfo';
import { bookSlot } from '../data';

const Booking = () => {
    return (
    <div className="app__booking">
      <Navbar />
      <SlotInfo />
    </div>
  )
}

export default Booking