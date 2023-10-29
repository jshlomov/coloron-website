import React from "react";
import Header from "../Header/Header";
import "./PhotosServices.css";
import ImageComp from "../ImageComponent/ImageComp";
import barMitzvaImg from "../../images/PhotosImages/barMitzva.png";
import britMila from "../../images/PhotosImages/britImg.png";
import studio from "../../images/PhotosImages/studio.jpg";
import sefer from "../../images/PhotosImages/sefer.jpg";
import visa from "../../images/PhotosImages/passportVisa.jpg";
import passport from "../../images/PhotosImages/pasport.jpg";



function PhotosServices() {
  const photographyServices = [
    { img: barMitzvaImg, title: "בר/בת מצווה" },
    { img: britMila, title: "בריתות" },
    { img: studio, title: "סטודיו" },
    { img: sefer, title: "צילומי סוף שנה" },
    { img: visa, title: "ויזה" },
    { img: passport, title: "פספורט" },
  ];
  return (
    <div id="photosServices" className="photosServices">
      <Header header="שרותי צילום" />
      <div className="ImageCompsContainer">
        {photographyServices.map((x, index) => {
          return <ImageComp img={x.img} title={x.title} />;
        })}
      </div>
    </div>
  );
}

export default PhotosServices;
