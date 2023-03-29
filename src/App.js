import React from "react";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router"
import Home from './components/Pages/Home'
import Contactus from './components/Pages/Contactus'

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
  )
}

export default App
