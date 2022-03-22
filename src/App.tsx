import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="hero">
      {/* <div className="navbar">
        <div className="logo">AVOCADO</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div> */}
      <Navbar />
      <div className="banner">
        <div className="left-column-up">
          <h1>
            Avo<span>cados</span>
          </h1>
          <h3>
            Always fills your <span>heart with joy</span>
          </h3>
        </div>
        <div className="left-column-down">
          <p>
            The Standard chunk of architecto soluta sint cumque! Excepturi
            numquam 1500s cupiditate praesentium libero beatae. Reiciendis sed
            eius iste ratione.
          </p>
          <div className="btn">
            <button type="button" className="primary-btn">
              Learn More
            </button>
            <button type="button">Watch Video</button>
          </div>
        </div>
        <div className="right-column">
          <div className="mainImage">
            <img src={require("./avo.jpg")} />
            <span></span>
            <span></span>
            {/* <span></span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
