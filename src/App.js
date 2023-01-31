import Register from "./Components/Register";
import './App.css';
import Verification from "./Components/Verification";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="verification" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
