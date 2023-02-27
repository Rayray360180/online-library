import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="titleContainer">
          <MenuBookIcon className="headerIcon" />
          <h1>React Online Library</h1>
        </div>
      </Link>
      <div className="favoriteContainer">
        <Link to="/favorites">
          <h1>Favorite Books</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
