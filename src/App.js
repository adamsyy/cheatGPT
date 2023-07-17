import React, { useContext } from "react";
import AuthContext from "./store/authContext";
import './styles/fonts.css';
import './App.css';
import Home from './pages/Home/Home';
const App = () => {

  return (
    <div>
      <Home/>
     </div>
  );
};

export default App;
