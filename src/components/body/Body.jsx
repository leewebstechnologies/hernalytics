import "./body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="bodyTitle">
        <h1>Post Election Data</h1>
        <h5>PRESIDENTIAL / 2023</h5>
      </div>
      <div className="bodyTitle">
        <h2>Presidential Race</h2>
        <div className="bodyTitles">
          <ul className="bodyList">
            <li className="bodyListItem">
              <h5>Election Date</h5>
            </li>
            <li className="bodyListItem">
              <h5>Presidential</h5>
            </li>
            <li className="bodyListItem">
              <h5>2023</h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="btnBody">
        <button className="buttons">
          <img className="bodyMap" src="./assets/images/map.png" alt="map" />
          <button className="btnplus">+</button>
          <button className="btnminus">-</button>
        </button>
      </div>
   
    </div>
  );
};

export default Body;
