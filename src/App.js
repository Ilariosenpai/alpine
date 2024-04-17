import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Acc from './component/acc/acc';

import './App.css';



function App() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Acc/>}/>
          <Route exact path="/configure" element={<Configure/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }

export default App;