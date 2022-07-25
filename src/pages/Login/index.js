import React, { useState } from 'react';
import './style.css';
import Background from '../../components/Background';

function Login() {
  const [passwordType, setPasswordType] = useState(false);

  return (
    <>
      <Background />
      <div className='loginContainer'>
        <div className='loginContainerBox'>
          <div className='loginHead text-center'>
            <h3>Login</h3>
          </div>
          <div className='loginContents d-flex flex-column align-items-center'>
            <div className='inputContainer'>
              <input
                className='inputField w-100'
                type='email'
                placeholder='Email'
              />
            </div>
            <div className='inputContainer d-flex'>
              <input
                type={passwordType ? 'text' : 'password'}
                className='inputField w-100'
                placeholder='Password'
              />
              <button
                className='showHideButton'
                onClick={() => setPasswordType(!passwordType)}
              >
                {passwordType ? (
                  <i class='fa-solid fa-eye'></i>
                ) : (
                  <i class='fa-solid fa-eye-slash'></i>
                )}
              </button>
            </div>
            <button className='btn btn-primary loginButton'>Login</button>
          </div>
          <div className='loginFooter text-center'>
            <span>
              Not a User?<a href='#'>Register</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
