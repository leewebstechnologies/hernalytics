// import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navLeft">
        <img className="logo" src="./assets/images/logo.png" alt="logo" />
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">ABOUT US</li>
          <li className="navListItem">OUR COMMUNITIES</li>
          <li className="navListItem">ELECTION DATA</li>
          <li className="navListItem">E-BUDDY</li>
          <li className="navListItem">VEO PLATFORM</li>
        </ul>
      </div>
      <div className="navRight">
        <ul className="navList">
          <li className="navListItem">LOGIN</li>
        </ul>
        <button className="btn">SIGN UP</button>
      </div>
    </div>
  );
};

export default Navbar;
