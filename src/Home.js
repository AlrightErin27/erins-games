import "./Home.css";
import NavBar from "./Components/NavBar/NavBar";

function Home() {
  return (
    <div className="Home">
      <div className="dispayRoutes-navbar">
        <NavBar />
      </div>
      <div className="dispayRoutes-components"></div>
    </div>
  );
}

export default Home;
