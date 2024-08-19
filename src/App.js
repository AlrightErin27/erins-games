import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";

//inside GamesFolder inside Games component
import Concentration1 from "./Components/GameComponents/Concentration1/Concentration1";
import NoughtsAndCrosses from "./Components/GameComponents/NoughtsAndCrosses/NoughtsAndCrosses";
import IceAndFire from "./Components/GameComponents/IceAndFire/IceAndFire";
import Crossword from "./Components/GameComponents/Crossword/Crossword";

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
          <Route path="/blog" element={<Blog />} />

          {/* //inside GamesFolder inside Games component */}
          <Route path="/concentration1" element={<Concentration1 />} />
          <Route path="/noughts-&-crosses" element={<NoughtsAndCrosses />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/ice-and-fire" element={<IceAndFire />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
