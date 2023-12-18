import './App.css';
import { Header} from './Components/Header';
import {NavBar} from './Components/NavBar';
import {ImageSlider} from './Components/ImageSlider';
import {Destinations} from './Components/Destinations';
import {Experience} from './Components/Experience';
import { Offers } from './Components/Offers';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <ImageSlider/>
      <Destinations/>
      <Experience/>
      <Offers/>
      <Footer/>

      
      

    </div>
  );
}

export default App;
