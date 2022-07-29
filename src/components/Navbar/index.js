// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

function Navbar({ setAddNote, logoutCard, setLogoutCard, user }) {
  const [avatar, setAvatar] = useState('');
  const firstName = user.name.split(' ');

  useEffect(() => {
    axios.get(`/auth/${user.id}`).then((response) => {
      setAvatar(response.data.avatar);
    });
  }, []);
  console.log('The Avatar :', avatar);

  return (
    <div className='navbarContainer d-flex justify-content-between align-items-center'>
      <div className='logo'>
        <Link to='/home' className='text-white logo'>
          Notes
        </Link>
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
            <img src={avatar} className='profilePicture me-2' />
            <span className='profileName'>{firstName[0]}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
