import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navList">
      <ul >
        <li>
          <a href="#about">אודות</a>
        </li>
        <li>
          <a href="#storeServices">שירותי חנות</a>
        </li>
        <li>
          <a href="#photosServices">שירותי צילום</a>
        </li>
        <li>
          <a href="#contactDetails">ליצירת קשר</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
