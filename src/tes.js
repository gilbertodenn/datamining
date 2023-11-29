import logo from './logo.png';
import './App.css';
// import './nav.js';
import './components/nav';
import React, { useNavigate, useEffect, useState, createContext } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import Apps from './Apps'
import Madrid from './components/card'
import NavScrollExample from './components/nav';

function App() {
  return (
    <div className="background">
      <main>
      <Apps/>
      <NavScrollExample/>
    <Madrid/>
    <MyComponent/>
    <flex/>
    
   
      </main> 
    </div>
  );
  }

  function MyComponent () {
    return (
      <div className = "background">
  
  
      </div>
    );
  };



function kontainer () {
  return (
    <div className="kontainer">

    </div>
  );
};




export default App