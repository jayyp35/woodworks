import React, { useState } from 'react';

import logo from '../../assets/works-2.gif';
import Input from '../../common/Input/Input';
import './Signup.scss';

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='Signup'>
      <div className='Left'>
        <img src={logo} alt="logo" height="350px" />
      </div>
      <div className='Right'>
        <div className='Container'>
          <div className='Title'>Hello!</div>
          <div>Create your account.</div>

          <div className='Form'>
            <Input placeholder='Enter your full name' label="Name" value={name} onChange={val => setName(val)} style={{ marginTop: "40px" }} />
            <Input placeholder='Enter your email address' label="Email" value={email} onChange={val => setEmail(val)} style={{ marginTop: "40px" }} />
            <Input placeholder='Enter a secure password' label="Password" value={password} onChange={val => setPassword(val)} style={{ marginTop: "40px" }} />

            <div className='Button'>
              Create Account
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup