import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo/Logo';

import UserRoute from "./UserRoute"

function isMobileDevice() {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  return mediaQuery.matches;
}


export default function Routing() {
  const [isMobile, setIsMobile] = useState(false);

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
      <Router>
        {/* {isMobile ? null : location.pathname === ("/") ? null : <Logo width="180px" position="absolute" left="20px"/>} */}
        {/* {!isMobile && location.pathname !== "/" && <Logo width="180px" position="fixed" top="20px" left="20px" />} */}
        <Logo width="180px" position="fixed" top="20px" left="20px"/>
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
    );
}
  