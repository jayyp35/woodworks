import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown, Button } from 'semantic-ui-react'

import logo from '../../assets/nav-logo.svg';
import './Navbar.scss';

function Nav() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isSignUp, setIsSignup] = useState(false);

  useEffect(() => {
    setIsSignup(location.pathname.includes('signup'))
  }, [location.pathname])

  if (isSignUp) return <></>

  return (
    <div className='Navbar'>
      <div className='Left'>
        <img src={logo} alt="logo" height="50px" />
        <div className='Title'>WOODWORKS</div>
      </div>
      <div className='Center'>
        {/* <Dropdown text='Suppliers' icon="" style={{ margin: "0 -20px 5px 0px" }}>
          <Dropdown.Menu style={{ width: "100%", marginTop: "20px" }}>
            <Dropdown.Item text='Coming Soon' />
          </Dropdown.Menu>
        </Dropdown> */}

        <Dropdown text='Products' style={{ margin: "0 -40px 5px 20px" }} icon="">
          <Dropdown.Menu style={{ width: "100%", marginTop: "20px" }}>
            <Dropdown.Item text='Coming Soon' />
          </Dropdown.Menu>
        </Dropdown>

        {/* <div className='Item'>
          Suppliers
        </div> */}
        {/* <div className='Item'>
          Products
        </div> */}
        <div className='Item'>
          About Us
        </div>

        <div className='Item'>FAQs</div>
      </div>

      <div className='Right'>
        <div className='SignupButton' onClick={() => navigate('/signup')}>
          Sign Up
        </div>
      </div>

    </div>
  )
}

export default Nav