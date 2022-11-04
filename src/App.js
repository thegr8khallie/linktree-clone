import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Contacts from "./screens/Contacts";
import i4g from "./assets/i4g.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <footer>
        <div id="zuri-icon">
          Zuri <span /> Internship
        </div>
        <div id="hng-icon">HNG Internship 9 frontend task</div>
        <div id="i4g-icon">
          <img src={i4g} alt="Ingressive for good" />
        </div>
      </footer>
    </div>
  );
};

export default App;
