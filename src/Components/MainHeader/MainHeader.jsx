import React from "react";
import "./MainHeader.css";
import logo from "../../images/logo.png";
import NavBar from "../NavBar/NavBar";

function MainHeader() {
  // const winSize = window.screen.height *0.25;

  return (
    <div
      className="mainHeader"
      // style={{ height: { winSize } }}
    >
      <img src={logo} alt="Store logo" />
      <h1>פוטו קולורון</h1>
      <a href="tel:+972545338050">054-533-8050</a>
      {/* <h3>054-533-8050</h3> */}
    </div>
  );
}

export default MainHeader;
