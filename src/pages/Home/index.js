import React, { useState } from 'react';
import AddNote from '../../components/AddNote';
import Background from '../../components/Background';
import DeleteModal from '../../components/DeleteModal';
import Navbar from '../../components/Navbar';
import NoteCard from '../../components/NoteCard';
import './style.css';

function Home() {
  const [addNote, setAddNote] = useState(false);
  const [logoutCard, setLogoutCard] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);

  return (
    <>
      <Background />
      <Navbar
        setAddNote={setAddNote}
        logoutCard={logoutCard}
        setLogoutCard={setLogoutCard}
      />
      {addNote ? <AddNote setAddNote={setAddNote} /> : null}
      {deleteNote ? <DeleteModal setDeleteNote={setDeleteNote} /> : null}
      {logoutCard ? (
        <button className='logoutContainer d-flex align-items-center justify-content-center'>
          <div>Logout</div>
          <i className='fa-solid fa-arrow-right-from-bracket'></i>
        </button>
      ) : null}
      <div className='homeDiv d-flex justify-content-center'>
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
        <NoteCard setDeleteNote={setDeleteNote} />
      </div>
    </>
  );
}

export default Home;
