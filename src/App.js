import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Homescreen/index";


function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Navbar/>
          <Home/>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
