import React from 'react';
import './style.css';

function Navbar({ setAddNote, logoutCard, setLogoutCard, user }) {
  return (
    <div className='navbarContainer d-flex justify-content-between align-items-center'>
      <div className='logo'>
        <h3 className='text-white'>Notes</h3>
      </div>
      <div className='containerRight d-flex align-items-center'>
        <button className='btn btn-primary' onClick={() => setAddNote(true)}>
          Add Note
        </button>
        <div className='profileDiv'>
          <button
            className='profileButton d-flex align-items-center'
            onClick={() => setLogoutCard(!logoutCard)}
          >
            <img src={user.avatar} className='profilePicture me-2' />
            <span className='profileName'>{user.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
