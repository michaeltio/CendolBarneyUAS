import {Routes, Route, matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

import Logo from '../components/Logo/Logo';

function isMobileDevice() {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  return mediaQuery.matches;
}


export default function Routing() {
  const [isMobile, setIsMobile] = useState(false);
  let {pathname} = useLocation();
  let isOnHome = matchPath("/", pathname)

  useEffect(() => {
    function handleResize() {
      setIsMobile(isMobileDevice());
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
      <>
        {isOnHome ? null : isMobile ? <Logo width="110px" position="fixed" left="5px" top="5px"/> : <Logo width="180px" position="fixed" left="20px" top="20px" />} 
        <Routes>    
          <Route path="/" element={<Home />}/>
          <Route path="/hiweather" element={<HiWeather />}/>
          <Route path="/primeornot" element={<PrimeOrNot />}/>
          <Route path="/astronomylibrary" element={<AstronomyLibrary />}/>
          <Route path="/magic8ball" element={<Magic8Ball />}/>
          <Route path="/sincebirth" element={<SinceBirth />}/>
          <Route path="/quoty" element={<Quoty />}/>
          <Route path="/dogsfromallovertheworld" element={<DogsFromAllOverTheWorld />}/>
          <Route path="/aboutus" element={<Credit />}/>
        </Routes>
        </>
    );
}
  