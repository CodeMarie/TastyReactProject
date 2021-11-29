import MovieItem from "./MovieItem";
import cinema from "./img/cinema-review.jpg";

function Titles(props) {

  return (
    <div>
      <h1>Tasty TV</h1>
      <img src={cinema} alt="cinema" />
      <h2>Recommended Titles</h2>
      {props.movies.map((movie, index) => (
        <MovieItem index={index} key={`movie-${index}`} movie={movie} handleWatch={props.handleWatch} />
      ))}
    </div>
  );
}

export default Titles;
