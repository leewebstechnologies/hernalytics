import "./top.css";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Top = () => {
  return (
    <div className="top">
      <div className="topTitle">
        <h1>Post Election Data</h1>
        <h5>PRESIDENTIAL / 2023</h5>
      </div>
      <div className="topTitle">
        <h2>Presidential Race</h2>
        <div className="topTitles">
          <ul className="topList">
            <li className="topListItem">
              <div className="dropdown">
                <h5 className="dropbtn">
                  Election Date
                  <KeyboardArrowDown className="arrow" />
                </h5>
              </div>
            </li>
            <li className="topListItem">
              <h5>Presidential</h5>
            </li>
            <li className="topListItem">
              <h5>2023</h5>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="btnTop">
        <div className="round">
          <img className="raceTop" src="./assets/images/map.png" alt="map" />
          <div className="button">
            <button className="btnplus">+</button>
            <button className="btnminus">-</button>
          </div>
        </div>
      </div>
      <div className="round2">
        <div className="secondButtons">
          <img className="topMap" src="./assets/images/circle.png" alt="map" />
          <img className="topMap" src="./assets/images/map2.png" alt="map" />
        </div>
      </div>
      <div className="footers">
        <div className="footerb">
          <div className="footerLeft">
            <img className="logo" src="./assets/images/logo.png" alt="logo" />
          </div>
          <h4 className="address">
            Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria.
          </h4>
          <h4 className="address">© 2022 Hernalytics</h4>
        </div>
        <div className="footerc">
          <h4 className="c">About</h4>
          <h4 className="c">Our Story</h4>
          <h4 className="c">Blog</h4>
          <h4 className="c">About Analytics</h4>
          <h4 className="c">Video</h4>
        </div>
        <div className="footerd">
          <h4 className="d">Support</h4>
          <h4 className="d">FAQS</h4>
          <h4 className="d">Private Policy</h4>
          <h4 className="d">Terms of Service</h4>
          <h4 className="d">Video</h4>
        </div>
        <div className="footere">
          <h4 className="e">Let's chat</h4>
          <h4 className="e">hernalytics@gmail.com</h4>
          <h4 className="e">+234 801 234 5678</h4>
          <h4 className="e">Terms of Service</h4>
        </div>
      </div>
    </div>
  );
};

export default Top;
