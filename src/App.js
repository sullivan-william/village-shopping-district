import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blacksmith from "./components/Blacksmith";
import Market from "./components/Market";
import Potions from "./components/Potions";
import './style.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blacksmith" element={<Blacksmith />} />
          <Route path="/market" element={<Market />} />
          <Route path="/potions" element={<Potions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;