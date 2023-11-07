import React from "react";
import NavBar from "./NavBar";
import './NavBar.css';

function FullScreenNavbar(props) {
  return (
    <div className="fullScreenNavbar">
      <NavBar close={props.close}/>
    </div>
  );
}

export default FullScreenNavbar;