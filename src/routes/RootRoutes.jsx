import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../modules/Home';
import Signup from '../modules/Signup';
import Supplier from '../modules/Supplier';
import List from '../modules/Supplier/pages/List';
import Products from '../modules/Products';
import SupplierRoutes from './SupplierRoutes';

function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signup isSignIn />} />

      <Route path="/supplier" element={<SupplierRoutes />}>
        <Route path="/supplier/home" element={<Supplier />} />
        <Route path="/supplier/products" element={<Products />} />
        <Route path="/supplier/list" element={<List />} />
      </Route>

      <Route path="/products/:category" element={<Products />}>
        {/* <Route path="/products/:category" element={<></>} /> */}
      </Route>
    </Routes>
  )
}

export default RootRoutes;