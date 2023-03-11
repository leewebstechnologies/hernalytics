import "./top.css";
import axios from "axios";

// const PresidentFetch = 
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
              <div class="select">
                <select>
                  <option value="1">Election Data</option>
                  <option value="2">Pre-Election</option>
                  <option value="3"> Election Date Live Updates</option>
                  <option value="4">Post-Election Analysis</option>
                </select>
              </div>
            </li>
            <li className="topListItem">
              <div class="select">
                <select>
                  <option value="1">Presidential</option>
                  <option value="2">Presidential</option>
                  <option value="3">Gubernatorial</option>
                  <option value="4">Senate</option>
                  <option value="5">House of Representatives</option>
                </select>
              </div>
            </li>
            <li className="topListItem">
              <div class="select">
                <select>
                  <option value="1">2023</option>
                  <option value="2">2019</option>
                  <option value="3">2015</option>
                  <option value="3">2011</option>
                  <option value="3">2007</option>
                  <option value="3">2003</option>
                  <option value="3">1999</option>
                  <option value="3">1995</option>
                  <option value="3">1991</option>
                  <option value="3">1987</option>
                  <option value="3">1983</option>
                  <option value="3">1979</option>
                  <option value="3">1975</option>
                  <option value="3">1971</option>
                  <option value="3">1967</option>
                  <option value="3">1963</option>
                  <option value="3">1959</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="btnTop">
        <div className="round">
          <div className="buttons">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
          <img className="raceTop" src="./assets/images/map.png" alt="map" />
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
