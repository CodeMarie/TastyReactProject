import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import WatchList from "./WatchList";
import Titles from "./Titles";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
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
    setWatchData(newList);
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
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Titles movies={movieData} handleWatch={handleWatch} />}
          />
          <Route
            path="/recommendedtitles"
            element={<Titles movies={movieData} handleWatch={handleWatch} />}
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watch={watchData}
                manageWatched={manageWatched}
                deleteAll={deleteAll}
                deleteWatched={deleteWatched}
                changeStarRating={changeStarRating}
                removeAnItem={removeAnItem}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;