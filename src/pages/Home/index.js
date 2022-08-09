import React, { useEffect, useState } from 'react';
import AddNote from '../../components/AddNote';
import Background from '../../components/Background';
import DeleteModal from '../../components/DeleteModal';
import ExpandCard from '../../components/ExpandCard';
import Navbar from '../../components/Navbar';
import NoteCard from '../../components/NoteCard';
import Notes from '../../assets/images/Notes.png';
import { useStore } from '../../store/index';
import { observer } from 'mobx-react-lite';
import './style.css';

const Home = observer(({ user }) => {
  const [addNote, setAddNote] = useState(false);
  const [logoutCard, setLogoutCard] = useState(false);
  const [deleteNote, setDeleteNote] = useState(false);
  const [expandCard, setExpandCard] = useState(false);
  const [noteId, setNoteId] = useState(null);
  const [noteDetails, setNoteDetails] = useState(null);

  const logout = () => {
    window.open(`${process.env.REACT_APP_EXPRESS_URL}/auth/logout`, '_self');
  };

  const { notesStore } = useStore();
  const { notes, getAllNotes, setUserId } = notesStore;

  setUserId(user.id);

  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {expandCard && (
        <ExpandCard setExpandCard={setExpandCard} noteDetails={noteDetails} />
      )}
      {deleteNote && (
        <DeleteModal setDeleteNote={setDeleteNote} noteId={noteId} />
      )}
      {logoutCard && (
        <button
          onClick={logout}
          className='logoutContainer d-flex align-items-center justify-content-center'
        >
          <div>Logout</div>
          <i className='fa-solid fa-arrow-right-from-bracket'></i>
        </button>
      )}
      {notes.length > 0 ? (
        <div className='homeDiv'>
          {notes.map((item) => (
            <NoteCard
              key={item.id}
              item={item}
              setDeleteNote={setDeleteNote}
              setExpandCard={setExpandCard}
              setNoteId={setNoteId}
              setNoteDetails={setNoteDetails}
            />
          ))}
        </div>
      ) : (
        <div className='homeDiv d-flex justify-content-center'>
          <div
            className={
              !addNote &&
              'notFound d-flex flex-column justify-content-center align-items-center'
            }
          >
            <img src={Notes} alt='' className='notesImage mb-2' />
            <h5>No notes here yet</h5>
          </div>
        </div>
      )}
    </>
  );
});

export default Home;
