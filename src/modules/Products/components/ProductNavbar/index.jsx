import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../../../assets/nav-logo.svg';
import './ProductNavbar.scss';

function ProductNavbar() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUp, setIsSignup] = useState(false);

  useEffect(() => {
    setIsSignup(location.pathname.includes('signup'))
  }, [location.pathname])

  if (isSignUp) return <></>

  return (
    <div className='ProductNavbar'>
      <div className='Left'>
        <img src={logo} alt="logo" height="50px" />
        <div className='Title'>WOODWORKS</div>
      </div>
      <div className='Center'>
        <div className='Item'>
          About Us
        </div>

        <div className='Item'>FAQs</div>
      </div>

      <div className='Right'>
        <div className='SignupButton'>
          Cart
        </div>
      </div>

    </div>
  )
}

export default ProductNavbar