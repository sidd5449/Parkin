import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Receipt from './pages/Receipt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Booking />} />
        <Route path='/:id/receipt' element={<Receipt />} />
      </Routes>
    </div>
  );
}

export default App;
