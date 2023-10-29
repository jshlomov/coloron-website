import React from "react";
import Header from "../Header/Header";
import "./StoreServices.css";

function StoreServices() {
  return (
    <div id="storeServices" className="storeServices">
      <Header header="שרותי החנות" />
      <div className="tilesFirstWrap">
        <ul class="tilesWrap">
          <li>
            <h2>01</h2>
            <h3>פיתוח תמונות</h3>
            <p>
              • תמונות רגילות בכל הגדלים
              <br />
              • מגנטים
              <br />
              • הדפסה על קנבס, קאפה ועץ
              <br />
            </p>
          </li>
          <li>
            <h2>02</h2>
            <h3>הדפסות ושרותי מחשב</h3>
            <p>
              • הדפסות שחור לבן וצבעוני
              <br />
              • למינציה
              <br />
              • חוברות, קונטרסים, ספירלות
              <br />• הקלדות
            </p>
          </li>
          <li>
            <h2>03</h2>
            <h3>המרות והעתקות מדיה</h3>
            <p>
              • המרת קלטות ודיסקים
              <br />
              *ניתן לקבל בדיסק און קי או למייל
              <br />
              • שחזור כרטיסי זיכרון
              <br />• העתקות מדיה
            </p>
          </li>
          <li>
            <h2>04</h2>
            <h3>פוטושופ</h3>
            <p>
              • תיקון תמונות ישנות <br />
              • גרפיקה
              <br />
              • החלפת רקעים, חיתוך וכדו'
              <br />
            </p>
          </li>
          <li>
            <h2>05</h2>
            <h3>אינטרנט ופקס</h3>
            <p>
              • גישה מאובטחת למייל
              <br />
              • שרותי פקס <br />
              • תיאומי מס
              <br />
              • ביטוח לאומי <br />• ועוד
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StoreServices;
