import WatchItem from "./WatchItem";
import camera from "./img/camera-ttn.gif";
import { Button } from "react-bootstrap";

function WatchList(props) {
  return (
    <div className="watch-container">
      <h1>Your WatchList</h1>
      <Button variant="success" onClick={props.deleteAll}>
        Delete All
      </Button>
      <div className="camera-img">
        <img src={camera} alt="camera clip" />
      </div>
      {props.watch.map((watch, index) => (
        <WatchItem
          index={index}
          key={`watched-${index}`}
          watch={watch}
          manageWatched={props.manageWatched}
          changeStarRating={props.changeStarRating}
          removeAnItem={props.removeAnItem}
        />
      ))}
      <div className="delete-watched-btn">
        <Button variant="success" onClick={props.deleteWatched}>
          Delete Watched
        </Button>
      </div>
    </div>
  );
}

export default WatchList;
