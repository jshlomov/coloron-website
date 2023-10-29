import React from "react";
import "./ImageComp.css";

function ImageComp(props) {

  return (
    <div className="ImageCompContainer">
      <div
        className="bgImage"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="ImageCompTextContainer">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default ImageComp;
