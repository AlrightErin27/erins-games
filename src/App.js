import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Concentration from "./Components/Concentration/Concentration";
import NoughtsAndCrosses from "./Components/NoughtsAndCrosses/NoughtsAndCrosses";
import Shop from "./Components/Shop/Shop";
import Crossword from "./Components/Crossword/Crossword";
import IceAndFire from "./Components/IceAndFire/IceAndFire";

function App() {
  const [viewShop, setViewShop] = useState(false);
  const handleShop = () => {
    // console.log("CLICKED SHOP");
    setViewShop(true);
  };
  const handleNoShop = () => {
    setViewShop(false);
  };

  return (
    <div className="App">
      {!viewShop ? (
        <div className="stripe">
          <div className="stripe-image"></div>
        </div>
      ) : (
        <div className="shop-background" />
      )}

      <div className="displayRoutes-navbar">
        <NavBar handleShop={handleShop} handleNoShop={handleNoShop} />
      </div>
      <div className="displayRoutes-components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/concentration" element={<Concentration />} />
          <Route path="/noughts-&-crosses" element={<NoughtsAndCrosses />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/crossword" element={<Crossword />} />
          <Route path="/ice-and-fire" element={<IceAndFire />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
