import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SpotInfo from "./pages/SpotInfo/SpotInfo";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/spot/:id" element={<SpotInfo />} />
        <Route path="/slot/:id" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
