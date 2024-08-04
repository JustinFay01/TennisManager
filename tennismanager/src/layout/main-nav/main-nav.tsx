import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import "./main-nav.css";

export const MainNav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink to={"/about"}>
          <div className="nav-item">
            <HomeIcon />
            About
          </div>
        </NavLink>
        <NavLink to={"/"}>
          <div className="nav-item">
            <GroupIcon />
            Customers
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
