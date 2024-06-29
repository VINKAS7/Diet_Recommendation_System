import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import  HomeFunction  from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeFunction />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
