import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Navbar from './components/NavBar';
import  HomeFunction  from './components/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<HomeFunction />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
