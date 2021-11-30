import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Favourites from "./Favourites";
import WatchList from "./WatchList";
import Titles from "./Titles";

function App() {
  const [home, setHome] = useState("Titles");
  const [movieData, setMovieData] = useState([]);
  const [watchData, setWatchData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://hub.dummyapis.com/vj/wzGUkpZ");
        const data = await response.json();
        setMovieData(data);
      } catch {}
    }
    getData();
  }, []);

  function deleteAll() {
    setWatchData([]);
  }

  function deleteWatched() {
    setWatchData(watchData.filter((item) => item.watched === false));
  }

  function removeAnItem(watch) {
    const newList = watchData.filter((item) => {
      return item.id !== watch;
    });
    console.log(watch);
    setWatchData(newList);
  }

  function getHomePage() {
    if (home === "Titles") {
      return <Titles movies={movieData} handleWatch={handleWatch} />;
    } else if (home === "WatchList") {
      return (
        <WatchList
          watch={watchData}
          manageWatched={manageWatched}
          deleteAll={deleteAll}
          deleteWatched={deleteWatched}
          changeStarRating={changeStarRating}
          removeAnItem={removeAnItem}
        />
      );
    } else {
      return <Favourites />;
    }
  }

  function handleWatch(movies) {
    setWatchData((prevMovies) => {
      return [
        ...prevMovies,
        {
          id: movies.id,
          name: movies.name,
          banner: movies.bannerUrl,
          watched: false,
          favourites: false,
          starRating: 0,
        },
      ];
    });
  }

  function manageWatched(watched) {
    const watchedTicked = watchData.map((item) => {
      if (watched.id === item.id) {
        item.watched = !watched.watched;
      }
      return item;
    });
    setWatchData(watchedTicked);
  }

  function changeStarRating(watched) {
    const ratings = watchData.map((item) => {
      if (watched.id === item.id) {
        item.starRating = watched.starRating;
      }
      return item;
    });
    setWatchData(ratings);
  }

  return (
    <div className="App">
      <div className="Pages">
        <button onClick={() => setHome("Titles")}>Titles</button>
        <button onClick={() => setHome("WatchList")}>Watch List</button>
        <button onClick={() => setHome("Favourites")}>Favourites</button>
        {getHomePage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
