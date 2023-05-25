import { BrowserRouter as Router, Routes, Route, Navigate, matchPath, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


import UserRoute from "./UserRoute"


export default function Routing() {
  

  return (
    <>
      <Router>
      
        {/* {!isMobile && location.pathname !== "/" && <Logo width="180px" position="fixed" top="20px" left="20px" />} */}
        {/* <Logo width="180px" position="fixed" top="20px" left="20px"/> */}
        <Routes>
          <Route path="/*" element={<UserRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );

}
