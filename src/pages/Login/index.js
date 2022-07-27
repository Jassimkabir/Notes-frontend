import React, { useState } from 'react';
import './style.css';
import Background from '../../components/Background';
import googleIcon from '../../assets/images/Google.png';
import githubIcon from '../../assets/images/Github.png';

function Login() {
  const [passwordType, setPasswordType] = useState(false);

  return (
    <>
      <Background />
      <div className='loginContainer'>
        <div className='loginContainerBox'>
          <div className='loginHead text-center'>
            <span>Login With</span>
          </div>
          <div className='loginContents d-flex flex-column align-items-center'>
            <button className='buttonContainer d-flex align-items-center'>
              <img className='icon me-2' src={googleIcon} alt='Google' /> Google
            </button>
            <button className='buttonContainer d-flex align-items-center'>
              <img className='icon me-2' src={githubIcon} alt='Google' /> Github
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
