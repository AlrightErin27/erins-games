import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Concentration from "./Components/Concentration/Concentration";
import NoughtsAndCrosses from "./Components/NoughtsAndCrosses/NoughtsAndCrosses";

function App() {
  return (
    <div className="App">
      <div className="stripe">
        <div className="stripe-image"></div>
      </div>
      <div className="displayRoutes-navbar">
        <NavBar />
      </div>
      <div className="displayRoutes-components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concentration" element={<Concentration />} />
          <Route path="/noughts-&-crosses" element={<NoughtsAndCrosses />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
