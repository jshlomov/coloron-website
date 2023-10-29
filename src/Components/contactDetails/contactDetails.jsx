import "./contactDetails.css";
import ContactDetailsCard from "./contactDetailsCard";
import mailPic from "../../images/icons8-mail-48.png";
import phonePic from "../../images/icons8-whatsapp-48.png";
import telPic from "../../images/phone.png";
import mapPic from "../../images/map.png";
import Header from "../Header/Header";

function ContactDetails(props) {
  const mapLink = "https://maps.app.goo.gl/Ns4Q99ZuUy4PKBKNA";
  const phoneLink = "";
  const whatsappLink = "https://wa.me/+972543076578";
  const mailLink = "mailto:x6183619@gmail.com";

  return (
    <div id="contactDetails" className="contactWrapper">
      <Header header="יצירת קשר" />
      <div className="contactWrapperCards">
        <ContactDetailsCard
          title="מייל: x6183619@gmail.com"
          imge={mailPic}
          link={mailLink}
        />
        <ContactDetailsCard
          title="ווטסאפ: 0543076578"
          imge={phonePic}
          link={whatsappLink}
        />
        <ContactDetailsCard
          title="טלפון (חיים): 054-5338050"
          imge={telPic}
          link={phoneLink}
        />
        <ContactDetailsCard
          title="מיקום: ר' טרפון 8, בני ברק"
          imge={mapPic}
          link={mapLink}
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.358365161488!2d34.830676524882236!3d32.08659891895003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a2fe11fad0d%3A0x422bef37e704b199!2z16jXkdeZINeY16jXpNeV158gOCwg15HXoNeZINeR16jXpw!5e0!3m2!1siw!2sil!4v1698519017242!5m2!1siw!2sil"
        width="80%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default ContactDetails;
