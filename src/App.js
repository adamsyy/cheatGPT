import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "./store/authContext";
import './styles/fonts.css';
import './App.css';
import Home from './pages/Home/Home';
import Stats from "./pages/Stats/stats";
const App = () => {

  return (
    <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="stats" element={<Stats/>} />
        <Route path="home" element={<Home/>} />
        </Routes>
  );
};

export default App;
