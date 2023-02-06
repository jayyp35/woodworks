import React, { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import RootRoutes from './routes/RootRoutes';
import Navbar from './common/Navbar/Navbar';
import './App.scss';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;