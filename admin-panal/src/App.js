import "./App.css";
import Onboard from "./pages/onboard-admin/Onboard";
import ScanQR from "./pages/scan-qr/ScanQR";
import ScanSuccess from "./pages/scan-status/ScanSuccess";
import ScanFail from "./pages/scan-status/ScanFail";

function App() {
  return (
    <div className="App">
      <ScanQR />
    </div>
  );
}

export default App;
