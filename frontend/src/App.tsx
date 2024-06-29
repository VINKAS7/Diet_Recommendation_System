import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Navbar from './components/NavBar';
import { Userinfo } from './components/Userinfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/userinfo" element={<Userinfo/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
