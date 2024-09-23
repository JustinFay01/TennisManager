import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { NavLink } from 'react-router-dom';
import './main-nav.css';

export const MainNav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink to={'/about'}>
          <div className="nav-item">
            <HomeIcon fontSize="large" />
            About
          </div>
        </NavLink>
        <NavLink to={'/'}>
          <div className="nav-item">
            <GroupIcon fontSize="large" />
            Customers
          </div>
        </NavLink>
        <NavLink to={'/sessions'}>
          <div className="nav-item">
            <SportsTennisIcon fontSize="large" />
            Sessions
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
