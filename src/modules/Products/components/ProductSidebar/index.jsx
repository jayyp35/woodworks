import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../../../assets/nav-logo.svg';
import './ProductSidebar.scss';

function ProductSidebar() {

  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();

  const changeSelected = (tabname) => {
    setSelected(tabname);
    navigate(`${tabname}`)
  }
  return (
    <div className='ProductSidebar'>
      <div className='Options'>
        <div className={`Option ${selected === 'home' ? "Selected" : ""}`} onClick={() => changeSelected('home')}>Home</div>
        <div className={`Option ${selected === 'products' ? "Selected" : ""}`} onClick={() => changeSelected('products')}>Your Products</div>
        <div className={`Option ${selected === 'list' ? "Selected" : ""}`} onClick={() => changeSelected('list')}>List Product</div>
      </div>

      <div className='Options2'>
        <div className='Option'>Logout</div>
      </div>
    </div>
  )
}

export default ProductSidebar