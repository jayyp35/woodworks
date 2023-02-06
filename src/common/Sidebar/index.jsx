import React from 'react';

import logo from '../../assets/nav-logo.svg';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='Logo'>
        <img src={logo} alt="logo" height={"40px"} />
        WOODWORKS
      </div>
      <div className='Options'>
        <div className='Option'>Your Products</div>
        <div className='Option'>List Product</div>
      </div>
    </div>
  )
}

export default Sidebar