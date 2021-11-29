
function WatchItem(props){

    function handleCheckbox() {
        props.manageWatched(props.watch)
    }

return (
    <div>
        <h2>{props.watch.name}</h2>
        <div><img src={props.watch.banner} alt="watch movies banner" /></div>
        <div className="Watch-Checkbox">
        <input type="checkbox" id="watch" name="watch" checked={props.watch.watched} onChange={handleCheckbox}/>Tick Watched</div>
        </div>
)}

export default WatchItem