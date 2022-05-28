import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Containers/Navbar';
import './index.css';
import './indexres.css';
import Home from './Containers/Home';
import About from './Containers/About'
import Login from './Containers/Login';
import Discovere from './Containers/Discovere';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/discover" element={<Discovere/>}/> 
        <Route path="/auth/:id" element={<Login/>}/> 
      </Routes>
    </Router>

  </React.StrictMode>
);
