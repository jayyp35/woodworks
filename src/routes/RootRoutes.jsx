import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../modules/Home';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RootRoutes;