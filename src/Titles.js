import MovieItem from "./MovieItem";
import cinema from "./img/cinema-review.jpg";

function Titles(props) {
  console.log(props.movies);

  return (
    <div>
      <h1>Test Titles</h1>
      <img src={cinema} alt="cinema" />
      {props.movies.map((movie, index) => (
        <MovieItem index={index} key={`movie-${index}`} movie={movie} handleWatch={props.handleWatch} />
      ))}
      
    </div>
  );
}

export default Titles;
