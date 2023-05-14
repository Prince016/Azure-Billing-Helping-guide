import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./components/Navbar";
import Add from "./Pages/Add";
import Show from "./Pages/Show";
import "bootstrap/dist/css/bootstrap.css";

function App() {


  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const SignUpPage = location.pathname === "/signup";

  return (
    <React.Fragment>

      {isLoginPage || SignUpPage ? null :<Navbar /> }
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/show" element={<Show />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
