import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
