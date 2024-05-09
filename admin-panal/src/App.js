import "./App.css";
import Onboard from "./pages/onboard-admin/Onboard";
import ScanQR from "./pages/scan-qr/ScanQR";
import ScanSuccess from "./pages/scan-status/ScanSuccess";
import ScanFail from "./pages/scan-status/ScanFail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/verify" element={<ScanQR />} />
        <Route path="/success/:id" element={<ScanSuccess />} />
        <Route path="/fail/:id" element={<ScanFail />} />
      </Routes>
    </div>
  );
}

export default App;
