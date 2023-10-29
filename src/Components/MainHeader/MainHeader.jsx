import React from "react";
import "./MainHeader.css";
import logo from "../../images/logo.png";

function MainHeader() {
  return (
    <div className="mainHeader">
      <img src={logo} alt="Store logo" />
      <h1>פוטו קולורון</h1>
      <h3>054-533-8050</h3>
    </div>
  );
}

export default MainHeader;
