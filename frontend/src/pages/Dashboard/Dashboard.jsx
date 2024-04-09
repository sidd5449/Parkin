import React from 'react'
import SpotCard from '../../components/SpotCard/SpotCard';
import SlotCard from '../../components/SlotCard/SlotCard';
const Dashboard = () => {
  return (
    <div>
      <SpotCard spotTitle="Lorem Ipsum" spotAddress="Some random dummy adress which you’ll never find in this mortal world" fours={20} twos={20} />
      <SlotCard status={false} booked={true} id={"A-01"}  />
    </div>
  )
}

export default Dashboard