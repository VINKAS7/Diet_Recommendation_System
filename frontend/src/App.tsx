import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />} />
<<<<<<< HEAD
        <Route path='/navbar' element={ <Navbar />}> </Route>
=======
>>>>>>> eb7cfce125e74c3eaeace93042ae20453f15d6d3
      </Routes>
    </BrowserRouter>
  );
}

export default App;
