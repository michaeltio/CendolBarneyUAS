import {Routes, Route } from 'react-router-dom';

//Import Page disini
import Home from "../pages/Home"
import HiWeather from "../pages/HiWeather"
import Magic8Ball from "../pages/Magic8Ball"
import Quoty from "../pages/Quoty"
import AstronomyLibrary from "../pages/AstronomyLibrary"
import WouldYouRather from "../pages/WouldYouRather"
import DogsFromAllOverTheWorld from "../pages/DogsFromAllOverTheWorld"
import PrimeOrNot from "../pages/PrimeOrNot"
import SinceBirth from "../pages/SinceBirth"
import Credit from "../pages/Credit"

export default function Routing() {
    
    return (
        <Routes>    
          <Route path="/" element={<Home />}/>
          <Route path="/astronomylibrary" element={<AstronomyLibrary />}/>
          <Route path="/credit" element={<Credit />}/>
          <Route path="/primeornot" element={<PrimeOrNot />}/>
          <Route path="/hiweather" element={<HiWeather />}/>
          <Route path="/magic8ball" element={<Magic8Ball />}/>
          <Route path="/wouldyourather" element={<WouldYouRather />}/>
          <Route path="/sincebirth" element={<SinceBirth />}/>
          <Route path="/quoty" element={<Quoty />}/>
          <Route path="/dogsfromallovertheworld" element={<DogsFromAllOverTheWorld />}/>
        </Routes>
    );
}
  