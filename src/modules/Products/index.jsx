import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../store/products';
import ProductNavbar from './components/ProductNavbar';
import ProductSidebar from './components/ProductSidebar';
import './Products.scss';

function Products() {

  const navigate = useNavigate();

  return (
    <div className='Products'>
      <ProductNavbar />
      <ProductSidebar />
      <div className='ProductsScreen'>
        <div className='CategoriesBox'>
          {Object.keys(CATEGORIES).map((category, index) => (
            <div
              className='Category'
              key={index}
              onClick={() => navigate(`/products/${CATEGORIES?.[category]}`)}
            >
              {CATEGORIES?.[category]?.capitalize()}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products