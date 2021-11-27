import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Favourites from "./Favourites";
import WatchList from "./WatchList";
import Titles from "./Titles";

function App() {
  const [home, setHome] = useState("Titles");
 const [movieData, setMovieData] = useState([]);

 
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://hub.dummyapis.com/vj/wzGUkpZ")
        const data = await response.json()
        setMovieData(data)
      } catch {
      }
    }
    getData()
  }, []);

 

  function getHomePage() {
    if (home === "Titles") {
      return <Titles movieData={movieData}/>;
    } else if (home === "WatchList") {
      return <WatchList />;
    } else {
      return <Favourites />;
    }
  }

  return (
    <div className="App">
    <nav>
      <p>Test Home App Page</p>
      <button onClick={() => setHome("Titles")}>Titles</button>
      <button onClick={() => setHome("WatchList")}>Watch List</button>
      <button onClick={() => setHome("Favourites")}>Favourites</button>
      {getHomePage()}
      </nav>
      <Footer />
    </div>
  );
}

export default App;
