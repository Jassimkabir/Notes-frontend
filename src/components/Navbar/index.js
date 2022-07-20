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
        <div className='profileIcon'>
          <i
            onClick={() => setLogoutCard(!logoutCard)}
            class='fa-solid fa-user'
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
