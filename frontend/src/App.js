import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import SpotInfo from './pages/SpotInfo/SpotInfo';
import Booking from './pages/Booking/Booking';
import SlotInfo from './pages/SlotInfo/SlotInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/spot/:id' element={<SpotInfo />} />
        <Route path='/slot/:id' element={<Booking />} />
        <Route path='/receipt/:id' element={<SlotInfo />} />
      </Routes>
    </div>
  );
}

export default App;
