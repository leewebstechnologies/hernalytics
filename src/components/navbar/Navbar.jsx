// import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navLeft">
        <img className="logo" src="./assets/images/logo.png" alt="logo" />
      </div>
      <div className="navCenter">
        {/* <ul className="navList"> */}
        <div className="navbar">
          <a href="#home">ABOUT US</a>

          <div class="dropdown">
            <button class="dropbtn">
              OUR COMMUNITIES
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">General User</a>
              <a href="#">Decide To Run (DTR)</a>
              <a href="#">Election Candidates</a>
              <a href="#">Reporters</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              ELECTION DATA
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Election Day Live Updates</a>
              <a href="#">Post-Election Analysis</a>
            </div>
          </div>
        </div>
        {/* <li className="navListItem">ABOUT US</li>
        <li className="navListItem">OUR COMMUNITIES</li>
        <li className="navListItem">ELECTION DATA</li>
        <li className="navListItem">E-BUDDY</li>
        <li className="navListItem">VEO PLATFORM</li> */}
        {/* </ul> */}
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
