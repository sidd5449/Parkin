import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { bgColor } from '../../data';
import './SlotInfo.scss';


const SlotInfo = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [currData, setcurrData] = useState([]);
  useEffect(() => {
    axios.get(`https://iot-server-yt0y.onrender.com/slot/${id}`).then((data) => {
      setcurrData(data.data);
      console.log(currData);
    })
  }, [])
  

  const book = async () => {
    await axios.patch(`https://iot-server-yt0y.onrender.com/book/${id}`);
    // window.location.reload(false);
    navigate(`receipt`);
  }
  
  return (
    <div className="app__slotInfo">
      <div className="app__slotInfo-stat" style={{backgroundColor: bgColor(currData.status, currData.booked)}}>
        <p>{currData.id}</p>
      </div>
      <button onClick = {book.bind(currData.id)} className='app__slotInfo-btn'>Book Slot</button>
    </div>
  )
}

export default SlotInfo