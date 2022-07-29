import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddNote from '../../components/AddNote';
import Background from '../../components/Background';
import DeleteModal from '../../components/DeleteModal';
import ExpandCard from '../../components/ExpandCard';
import Navbar from '../../components/Navbar';
import NoteCard from '../../components/NoteCard';
import Notes from '../../assets/images/Notes.png';
import './style.css';

function Home({ user }) {
  const [addNote, setAddNote] = useState(false);
  const [logoutCard, setLogoutCard] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);
  const [expandCard, setExpandCard] = useState(false);
  const [notes, setNotes] = useState([]);

  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/notes/${user.id}/get-all-notes`)
      .then((response) => {
        setNotes(response.data);
      });
  }, []);

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
        {notes.length > 0 ? (
          notes.map((item) => (
            <NoteCard
              item={item}
              setDeleteNote={setDeleteNote}
              setExpandCard={setExpandCard}
            />
          ))
        ) : (
          <div
            className={
              !addNote &&
              'notFound d-flex flex-column justify-content-center align-items-center'
            }
          >
            <img src={Notes} alt='' className='notesImage mb-2' />
            <h5>No notes here yet</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
