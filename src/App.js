import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import './App.css';
import Configurateur from './Configurateur';
import Acc from './component/accueil/accueil';



function App() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Acc/>}/>
          <Route exact path="/configure" element={<Configurateur/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }

export default App;