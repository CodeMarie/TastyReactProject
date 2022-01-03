import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ttvlogo from './img/ttv-bg.png';

function Nav() {
  return (
    <nav>
    <Link to="/"><img src={ttvlogo} alt="tasty tv logo" /></Link>
      <Link to="/recommendedtitles">
        <Button variant="outline-success" style={{ marginRight: 10 }} size="lg">
          Your Recommended Titles
        </Button>
      </Link>
      <Link to="/watchlist">
        <Button variant="outline-success" size="lg">
          My Movies Watch List
        </Button>
      </Link>
    </nav>
  );
}

export default Nav;
