import './App.css';
import ContactDetails from "./Components/contactDetails/contactDetails"
import PhotosServices from "./Components/PhotosServices/PhotosServices"
import StoreServices from "./Components/StoreServices/StoreServices"
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import MainHeader from './Components/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <NavBar />
      <About/>
      <StoreServices/>
      <PhotosServices />
      <ContactDetails />
    </div>
  );
}

export default App;
