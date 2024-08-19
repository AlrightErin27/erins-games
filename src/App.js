import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Games from "./Components/Games/Games";
import Concentration1 from "./Components/Games/GamesFile/Concentration1/Concentration1";
import NoughtsAndCrosses from "./Components/Games/GamesFile/NoughtsAndCrosses/NoughtsAndCrosses";
import IceAndFire from "./Components/Games/GamesFile/IceAndFire/IceAndFire";

import Crossword from "./Components/Games/GamesFile/Crossword/Crossword";

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
          <Route path="/games" element={<Games />} />

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
