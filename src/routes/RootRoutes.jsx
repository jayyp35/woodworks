import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../modules/Home';
import Signup from '../modules/Signup';
import Supplier from '../modules/Supplier';
import SupplierRoutes from './SupplierRoutes';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup />} />

      <Route path="/supplier" element={<SupplierRoutes />}>
        <Route path="/supplier/home" element={<Supplier />} />
      </Route>
    </Routes>
  )
}

export default RootRoutes;