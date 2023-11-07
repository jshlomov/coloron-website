import "./App.css";
import ContactDetails from "./Components/contactDetails/contactDetails";
import PhotosServices from "./Components/PhotosServices/PhotosServices";
import StoreServices from "./Components/StoreServices/StoreServices";
import About from "./Components/About/About";
import MainHeader from "./Components/MainHeader/MainHeader";
import MobileNavbar from "./Components/NavBar/MobileNavbar";
import FullScreenNavbar from "./Components/NavBar/FullScreenNavbar";

import { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

function App() {
  const [open, setOpen] = useState(false);

  const HamburgerIcon = (
    <CgMenuRound
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
      style={{ backgroundColor: "#333" }}
    />
  );
  const CloseIcon = (
    <CgCloseO
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
      style={{ backgroundColor: "#333" }}
    />
  );

  return (
    <div className="App">
      <div className="hederAndNavContainer">
        <MainHeader />
        {!open ? HamburgerIcon : CloseIcon}
        {open && <MobileNavbar close={() => setOpen(!open)} />}
        <FullScreenNavbar />
      </div>
      <div onClick={() => setOpen(false)}>
        <About />
        <StoreServices />
        <PhotosServices />
        <ContactDetails />
      </div>
    </div>
  );
}

export default App;
