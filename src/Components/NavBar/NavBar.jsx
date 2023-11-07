import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="navList">
      <ul>
        <li>
          <a href="#about"  onClick={props.close}>
            אודות
          </a>
        </li>
        <li>
          <a href="#storeServices" onClick={props.close} >
            שירותי חנות
          </a>
        </li>
        <li>
          <a href="#photosServices" onClick={props.close}>
            שירותי צילום
          </a>
        </li>
        <li>
          <a href="#contactDetails" onClick={props.close}>
            ליצירת קשר
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
