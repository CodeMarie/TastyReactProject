import { useState } from "react";
import { FaStar } from "react-icons/fa";

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
    <div>
      <h2>{props.watch.name}</h2>
      <div>
        <img src={props.watch.banner} alt="watch movies banner" />
      </div>
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
      <div>{<button onClick={deleteClick}>Delete this Content</button>}</div>
    </div>
  );
}

export default WatchItem;
