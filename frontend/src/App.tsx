import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Navbar from './components/NavBar';
<<<<<<< HEAD
import  HomeFunction  from './components/Home';
=======
import { Userinfo } from './components/Userinfo';
>>>>>>> d121690301c6b1e8658f386af944b5ef79e6df74

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />} />
<<<<<<< HEAD
        <Route path="/home" element={<HomeFunction />} />
    </Routes>
=======
      </Routes>
>>>>>>> d121690301c6b1e8658f386af944b5ef79e6df74
    </BrowserRouter>

  );
}

export default App;
