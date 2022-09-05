import './App.scss';
import 'hover.css/css/hover-min.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/Nav';
import Soundtracks from './components/soundtracks/Soundtracks';
import Videos from './components/videos/Videos';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/soundtracks" element={<Soundtracks />} />
      </Routes>
    </div>
  );
}

export default App;
