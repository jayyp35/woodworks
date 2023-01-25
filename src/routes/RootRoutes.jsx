import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../modules/Home';
import Signup from '../modules/Signup';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RootRoutes;