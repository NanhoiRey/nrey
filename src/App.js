import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import HeroSection from './Pages/Home/HeroSection';
import Contact from './Pages/Home/ContactMe';
import Home from "./Pages/Home/Homescreen";
import AboutMe from './Pages/Home/AboutMe';
import MyPortfolio from './Pages/Home/Portifolio';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
