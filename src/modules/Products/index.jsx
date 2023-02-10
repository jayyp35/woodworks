import React from 'react';
import ProductNavbar from './components/ProductNavbar';
import ProductSidebar from './components/ProductSidebar';
import './Products.scss';

function Products() {
  return (
    <div className='Products'>
      <ProductNavbar />
      <ProductSidebar />
      <div className='ProductsScreen'>
        hi
      </div>
    </div>
  )
}

export default Products