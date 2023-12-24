import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="titleContainer">
          <MenuBookIcon className="headerIcon" />
          <h1>Онлайн библиотека "№ 7"</h1>
        </div>
      </Link>
      <div className="favoriteContainer">
        <Link to="/favorites">
          <h1>Избранные книги</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
