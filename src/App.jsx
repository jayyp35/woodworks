import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RootRoutes from './routes/RootRoutes';
import Navbar from './common/Navbar/Navbar';
import './App.scss';



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <RootRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;