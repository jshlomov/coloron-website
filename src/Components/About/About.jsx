import React from "react";
import "./About.css";
import Header from "../Header/Header";
import bgImage from "../../images/bgImage5.jpg";

function About() {
  const winSize = window.screen.height -280;

  return (
    <div
      id="about"
      className="about"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="aboutDetails">
        <h1>מי אנחנו?</h1>
        <h3>
          ארבעה עשורים של מקצעויות! <br></br>צילום ושירותי מחשוב.
          {/* חנות פוטו קולורון, חנות צילום בעלת ניסיון של למעלה משלושה עשורים.
          אצלנו תמצאו מקצועיות, איכות ונאמנות. מתוך מגוון שירותינו ניתן למצוא
          בעיקר צילומי איכות לאירועים קטנים כגון : בר ובת מצווה, אירוסין,
          בריתות, פדיון, צילומי סוף שנה לישיבות ,תיכונים בתי ספר וכיוצ״ב…{" "}
          <br></br>וכן, אנחנו יחודיים בשירותי פיתוח מתקדמים, פוטושופ ברמות הכי
          גבוהות שיש, שירותי המרות ועוד ועוד… */}
        </h3>
      </div>
      {/* <img src={bgImage} alt="camera picture" /> */}
    </div>
  );
}

export default About;
