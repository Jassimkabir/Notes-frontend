import React from 'react';
import './style.css';

function Navbar({ setAddNote, logoutCard, setLogoutCard }) {
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
            className='profileButton'
            onClick={() => setLogoutCard(!logoutCard)}
            onBlur={() => setLogoutCard(false)}
          >
            <i className='fa-solid fa-user'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
