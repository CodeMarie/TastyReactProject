import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Card } from 'react-bootstrap';

const starColours = {
  orange: "orange",
  grey: "grey",
};

function WatchItem(props) {
  const [hoverValue, setHoverValue] = useState(undefined);
  const starsArray = Array(5).fill(0);

  function handleOnClickStar(value) {
    props.watch.starRating = value;
    props.changeStarRating(props.watch);
  }

  function handleCheckbox() {
    props.manageWatched(props.watch);
  }

  function handleMouseHover(value) {
    setHoverValue(value);
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  function deleteClick (){
    props.removeAnItem(props.watch.id)
  }

  return (
    <div className="watch-card">
    <Card className="text-center" style={{ width: '28rem'}}>
      <Card.Title>{props.watch.name}</Card.Title>
      <Card.Img variant="top" img src={props.watch.banner} alt="watch movies banner" />
      <Card.Body>
      <div className="Watch-Checkbox">
        <input
          type="checkbox"
          id="watch"
          name="watch"
          checked={props.watch.watched}
          onChange={handleCheckbox}
        />
        Tick Watched
      </div>
      {starsArray.map((_, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            style={{ marginRight: 15, cursor: "pointer" }}
            onClick={() => handleOnClickStar(index + 1)}
            onMouseOver={() => handleMouseHover(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={
              (hoverValue || props.watch.starRating) > index
                ? starColours.orange
                : starColours.grey
            }
          />
        );
      })}
      <div>{<Button variant="light" onClick={deleteClick}>Delete this Content</Button>}</div>
      </Card.Body>
      </Card>
    </div>
  );
}

export default WatchItem;
