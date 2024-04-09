import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <h1 className="display-2">Virat Kohli</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/biography">
              Biography
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/records">
              Records
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
