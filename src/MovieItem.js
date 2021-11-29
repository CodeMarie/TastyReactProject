function MovieItem(props) {
  function addToWatchList() {
    props.handleWatch(props.movie);
  }

  return (
    <div>
      <h2>{props.movie.name}</h2>
      <div>
        <img src={props.movie.bannerUrl} alt="movie banner" />
      </div>
      <button onClick={addToWatchList}>Add to Watch List</button>
    </div>
  );
}

export default MovieItem;
