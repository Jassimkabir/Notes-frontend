import React, { useEffect, useState } from 'react';
import AddNote from '../../components/AddNote';
import Background from '../../components/Background';
import DeleteModal from '../../components/DeleteModal';
import ExpandCard from '../../components/ExpandCard';
import Navbar from '../../components/Navbar';
import NoteCard from '../../components/NoteCard';
import './style.css';

function Home({ user }) {
  const [addNote, setAddNote] = useState(false);
  const [logoutCard, setLogoutCard] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);
  const [expandCard, setExpandCard] = useState(false);

  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  return (
    <>
      <Background />
      <Navbar
        setAddNote={setAddNote}
        logoutCard={logoutCard}
        setLogoutCard={setLogoutCard}
        user={user}
      />
      {addNote && <AddNote setAddNote={setAddNote} />}
      {expandCard && <ExpandCard setExpandCard={setExpandCard} />}
      {deleteNote && <DeleteModal setDeleteNote={setDeleteNote} />}
      {logoutCard && (
        <button
          onClick={logout}
          className='logoutContainer d-flex align-items-center justify-content-center'
        >
          <div>Logout</div>
          <i className='fa-solid fa-arrow-right-from-bracket'></i>
        </button>
      )}
      <div className='homeDiv d-flex justify-content-center'>
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
        <NoteCard setDeleteNote={setDeleteNote} setExpandCard={setExpandCard} />
      </div>
    </>
  );
}

export default Home;
