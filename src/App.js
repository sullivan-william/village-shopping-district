import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blacksmith from "./components/Blacksmith";
import Market from "./components/Market";
import Potions from "./components/Potions";
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blacksmith" element={<Blacksmith />} />
        <Route path="/market" element={<Market />} />
        <Route path="/potions" element={<Potions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;