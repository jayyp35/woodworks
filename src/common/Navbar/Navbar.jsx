import React from 'react';
import { Dropdown } from 'semantic-ui-react'

import logo from '../../assets/nav-logo.svg';
import './Navbar.scss';

function Nav() {

  return (
    <div className='Navbar'>
      <div className='Left'>
        <img src={logo} alt="logo" height="50px" />
        <div className='Title'>WOODWORKS</div>
      </div>
      <div className='Center'>
        <Dropdown text='Suppliers' icon="" style={{ margin: "0 -20px 5px 0px" }}>
          <Dropdown.Menu style={{ width: "100%", marginTop: "20px" }}>
            <Dropdown.Item text='Coming Soon' />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Products' style={{ margin: "0 -40px 5px 20px" }} icon="">
          <Dropdown.Menu style={{ width: "100%", marginTop: "20px" }}>
            <Dropdown.Item text='Coming Soon' />
          </Dropdown.Menu>
        </Dropdown>

        <div className='Item'>
          About Us
        </div>

        <div className='Item'>FAQs</div>
      </div>

    </div>
  )
}

export default Nav