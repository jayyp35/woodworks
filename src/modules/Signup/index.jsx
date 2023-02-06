import { addListener } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';

import logo from '../../assets/works-2.gif';
import Input from '../../common/Input/Input';
import './Signup.scss';

function Signup() {

  const [selected, setSelected] = useState(1);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [addr, setAddr] = useState('');
  const [gst, setGst] = useState('');

  useEffect(() => {
    setName('')
    setEmail('')
    setPassword('')
    setPhone('')
    setAddr('')
    setGst('')
  }, [selected])

  return (
    <div className='Signup'>
      <div className='Left'>
        <img src={logo} alt="logo" height="350px" />
      </div>
      <div className='Right'>
        <div className='Container'>
          <div className='Title'>Hello!</div>
          <div>I am a:</div>

          <div className='Selector'>
            <div className={`Option ${selected === 1 ? "Selected" : ""}`} onClick={() => setSelected(1)}>Supplier</div>
            <div className={`Option ${selected === 2 ? "Selected" : ""}`} onClick={() => setSelected(2)}>Customer</div>
          </div>

          <div>
            Create your&nbsp;
            <span style={{ textDecoration: "underline" }}>{selected === 1 ? "Supplier" : "Customer"}</span>
            &nbsp;account.
          </div>

          <form className='Form' autoComplete='off'>

            {selected === 1 ? (
              <>
                <Input placeholder='Enter your full name' label="Name" value={name} onChange={val => setName(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter your phone number' label="Phone" value={phone} onChange={val => setPhone(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter your email address' label="Email" value={email} onChange={val => setEmail(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter a secure password' label="Password" value={password} onChange={val => setPassword(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter your company address' label="Company Address" value={addr} onChange={val => setAddr(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter your GST number' label="GST Number" value={gst} onChange={val => setGst(val)} style={{ marginTop: "40px" }} />
              </>
            ) : (
              <>
                <Input placeholder='Enter your full name' label="Name" value={name} onChange={val => setName(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter your phone number' label="Phone" value={phone} onChange={val => setPhone(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter your email address' label="Email" value={email} onChange={val => setEmail(val)} style={{ marginTop: "40px" }} />
                <Input placeholder='Enter a secure password' label="Password" value={password} onChange={val => setPassword(val)} style={{ marginTop: "40px" }} type="password" />
                <Input placeholder='Enter your Address' label="Address" value={addr} onChange={val => setAddr(val)} style={{ marginTop: "40px" }} />
              </>
            )}

            <div className='Button'>
              Create Account
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup