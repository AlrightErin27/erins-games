import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import NoughtsAndCrosses from "./Components/NoughtsAndCrosses/NoughtsAndCrosses";
import Concentration from "./Components/Concentration/Concentration";

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
          <Route path="/noughts-&-crosses" element={<NoughtsAndCrosses />} />
          <Route path="/concentration" element={<Concentration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
