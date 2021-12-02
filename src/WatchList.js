import WatchItem from "./WatchItem";
import camera from "./img/camera-ttn.gif"
import { Button, Container, Row } from 'react-bootstrap';

function WatchList(props) {

  return (
    <div className="watch-container">
    <Container>
    <Button variant="secondary" onClick={props.deleteAll}>Delete All</Button>
    <Row>
      <h1>Test WatchList</h1>
     
      <div className="camera-img"><img src={camera} alt="camera clip" /> </div>
      </Row>
      {props.watch.map((watch, index) => 
            <WatchItem index={index} key={`watched-${index}`} watch={watch} manageWatched={props.manageWatched} changeStarRating={props.changeStarRating} removeAnItem={props.removeAnItem}/>
        )
        }
        <button onClick={props.deleteWatched}>Delete Watched</button>
        </Container>
    </div>
    
  );
}

export default WatchList;
