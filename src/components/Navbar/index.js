// import axios from 'axios';
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
} from '@optimizely/react-sdk';
import { browserName } from 'react-device-detect';

function Navbar({ setAddNote, logoutCard, setLogoutCard, user }) {
  const firstName = user.name.split(' ');
  const firstLetter = user.name.split('');

  const [avatar, setAvatar] = useState(true);

  const optimizely = createInstance({
    sdkKey: 'QLrDLe4wZnWctqWPt2BLs',
  });

  console.log('Optimizely Client', optimizely);

  const onImageError = () => {
    setAvatar(false);
  };

  console.log(`${browserName}`);

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: user.id,
        attributes: { browser_name: browserName },
      }}
    >
      <div className='navbarContainer d-flex justify-content-between align-items-center'>
        <div className='logo'>
          <Link to='/home' className='text-white logo'>
            Notes
          </Link>
        </div>
        <div className='containerRight d-flex align-items-center'>
          <OptimizelyFeature feature='test_flag'>
            {(enabled) =>
              enabled && <button className='btn btn-primary'>FireFox</button>
            }
          </OptimizelyFeature>
          <button className='btn btn-primary' onClick={() => setAddNote(true)}>
            Add Note
          </button>
          <div className='profileDiv'>
            <button
              className='profileButton d-flex align-items-center'
              onClick={() => setLogoutCard(!logoutCard)}
            >
              {avatar ? (
                <img
                  src={user.avatar}
                  className='profilePicture me-2'
                  alt='Profile'
                  onError={() => onImageError()}
                />
              ) : (
                <button className='altProfileDiv d-flex align-items-center justify-content-center me-2'>
                  <div className='firstLetter'>
                    {firstLetter[0]}
                    {firstLetter[1]}
                  </div>
                </button>
              )}
              <span className='profileName'>{firstName[0]}</span>
            </button>
          </div>
        </div>
      </div>
    </OptimizelyProvider>
  );
}

export default Navbar;
