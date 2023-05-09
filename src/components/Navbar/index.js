// import axios from 'axios';
import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar({ setAddNote, logoutCard, setLogoutCard, user }) {
  const firstName = user.name.split(' ');
  const firstLetter = user.name.split('');

  const [avatar, setAvatar] = useState(true);

  const onImageError = () => {
    setAvatar(false);
  };

  return (
    <div className='navbarContainer d-flex justify-content-between align-items-center'>
      <div className='logo d-flex justify-content-between align-items-center'>
        <Link to='/notes' className='text-white logo'>
          Notes
        </Link>
        <button
          className='btn btn-primary btn-rounded btn-icon ms-4'
          onClick={() => setAddNote(true)}
        >
          <i class='fa-solid fa-plus'></i>
        </button>
      </div>
      <div className='containerRight d-flex align-items-center'>
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
  );
}

export default Navbar;
