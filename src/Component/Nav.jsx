import { Link } from "react-router";
import "./../App.css";
import logo from "./../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <ul className="nav-bar">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/booking">ABOUT</Link>
        <Link to="/booking">MENU</Link>
        <Link to="/booking">RESERVATIONS</Link>
        <Link to="/booking">ORDER ONLINE</Link>
        <Link to="/booking">LOGIN</Link>
      </ul>
    </div>
  );
};

export default Nav;
