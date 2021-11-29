import WatchItem from "./WatchItem";


function WatchList(props) {

  return (
    <div>
    <button onClick={props.deleteAll}>Delete All</button>
      <h1>Test WatchList</h1>
      {props.watch.map((watch, index) => 
            <WatchItem index={index} key={`watched-${index}`} watch={watch} manageWatched={props.manageWatched} changeStarRating={props.changeStarRating} removeAnItem={props.removeAnItem}/>
        )
        }
        <button onClick={props.deleteWatched}>Delete Watched</button>
    </div>
  );
}

export default WatchList;
