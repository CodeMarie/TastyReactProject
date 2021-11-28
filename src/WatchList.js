import WatchItem from "./WatchItem";

function deleteAll(){
console.log("delete everything")
}

// function switchWatched(){
//   console.log("switched")
// }

function WatchList(props) {
  return (
    <div>
    <button>Delete All</button>
      <h1>Test WatchList</h1>
      {props.watch.map((watch, index) => 
            <WatchItem index={index} key={`watched-${index}`} watch={watch} manageWatched={props.manageWatched} />
        )
        }
        <button onClick={deleteAll}>Delete Watched</button>
    </div>
  );
}

export default WatchList;
