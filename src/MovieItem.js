import { Button } from 'react-bootstrap';

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
      <Button variant="success" style={{ marginTop: 10, marginBottom: 15}} onClick={addToWatchList}>Add to My Movies Watch List</Button>
    </div>
  );
}

export default MovieItem;
