import React from "react";
import NavBar from "./NavBar";
import './NavBar.css';

function MobileNavbar(props) {
  return (
    <div className="mobileNavbar">
      <NavBar close={props.close}/>
    </div>
  );
}

export default MobileNavbar;
