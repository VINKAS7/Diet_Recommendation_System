import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import {Userinfo} from "./components/Userinfo.tsx";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path={"/user_info"} element={< Userinfo/>} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
