import React from "react";
import "./About.css";
import Header from "../Header/Header";
function About() {
  return (
    <div id="about" className="about">
      <Header header="מי אנחנו?" />
      <div className="aboutDetails">
        <h3>
          חנות פוטו קולורון, חנות צילום בעלת ניסיון של למעלה משלושה עשורים.
          אצלנו תמצאו מקצועיות, איכות ונאמנות. מתוך מגוון שירותינו ניתן למצוא
          בעיקר צילומי איכות לאירועים קטנים כגון : בת ובת מצווה, אירוסין,
          בריתות, פדיון, צילומי סוף שנה לישיבות ,תיכונים בתי ספר וכיוצ״ב… <br></br>וכן,
          אנחנו יחודיים בשירותי פיתוח מתקדמים, פוטושופ ברמות הכי גבוהות שיש,
          שירותי המרות ועוד ועוד…
        </h3>
      </div>
    </div>
  );
}

export default About;
