import { useEffect, useState } from "react";
import axios from "axios";
import "./top.css";

// const PresidentFetch =
const Top = () => {
  const [preResult, setPresResult] = useState([]);
  const [guberResult, setGuberResult] = useState([]);
  const [dataType, setDataType] = useState("PRE_ANALYSIS_MAP");
  // console.log("preResult", preResult);
  console.log("guberResult", guberResult.Abia);

  const presidentialUrl =
    "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president";

  const gubernatorialUrl =
    "https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result";

  const getPresidentialResult = async () => {
    try {
      const result = await axios.get(presidentialUrl);
      setPresResult(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPresidentialResult();
  }, []);

  const getGubernatorialResult = async () => {
    try {
      const result = await axios.get(gubernatorialUrl);
      setGuberResult(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGubernatorialResult();
  }, []);

  // useEffect(() => {
  //   setDataType({
  //     type: 'PRE_ANALYSIS_MAP',
  //   });
  // }, []);

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
                <select
                  value={dataType}
                  onChange={(e) => {
                    setDataType(e.target.value);
                  }}
                >
                  <option value="PRE_ANALYSIS_MAP">Pres-Analysis</option>
                  <option value="PRESIDENTIAL_OUTCOME">Presidential</option>
                  <option value="GUBER_OUTCOME">Gubernatorial</option>
                  <option value="SENA_OUTCOME">Senate</option>
                  <option value="HOUSE_OUTCOME">
                    House of Representatives
                  </option>
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
      {dataType === "PRE_ANALYSIS_MAP" ? (
        <>
          <div className="btnTop">
            <div className="round">
              <div className="buttons">
                <button className="btn">+</button>
                <button className="btn">-</button>
              </div>
              <img
                className="raceTop"
                src="./assets/images/map.png"
                alt="map"
              />
            </div>
          </div>
          <div className="round2">
            <div className="secondButtons">
              <img
                className="topMap"
                src="./assets/images/circle.png"
                alt="map"
              />
              <img
                className="topMap"
                src="./assets/images/map2.png"
                alt="map"
              />
            </div>
          </div>
        </>
      ) : dataType === "PRESIDENTIAL_OUTCOME" ? (
        <>
          <div className="table-container">
            <table>
              <tr>
                <th>Candidate</th>
                <th>Party</th>
                <th>Gender</th>
                <th>Running Mate</th>
              </tr>
              {preResult.map((pre) => (
                <tr>
                  <td>{pre.full_name}</td>
                  <td>{pre.political_party_name}</td>
                  <td>Male</td>
                  <td>{pre.candidates_vote}</td>
                </tr>
              ))}
            </table>
          </div>
        </>
      ) : null}
      {/* <table>
  <tr>
    <th>{guberResult}</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
</table> */}

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


