import React, { useState } from 'react';
import { useStore } from '../../store/index';
import { observer } from 'mobx-react-lite';
import './style.css';

const AddNote = observer(({ setAddNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const { notesStore } = useStore();
  const { addNote } = notesStore;

  const handleSubmit = () => {
    if (/^\s*$/.test(title && desc)) {
      return;
    }
    addNote(title, desc);
    setAddNote(false);
  };
  return (
    <div className='addNoteContainer'>
      <div className='addNoteContents'>
        <div className='addNoteHead d-flex justify-content-between align-items-center'>
          <input
            className='w-100 noteTitle'
            autoFocus
            type='text'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => setAddNote(false)} className='closeButton'>
            <i class='fa-solid fa-circle-xmark'></i>
          </button>
        </div>
        <div className='addNoteBody my-4'>
          <textarea
            cols='30'
            rows='100'
            placeholder='Start Typing'
            onChange={(e) => setDesc(e.target.value)}
            type='text'
            className='textArea w-100'
          ></textarea>
        </div>
        <button
          onClick={() => handleSubmit()}
          className='btn btn-primary submitButton'
        >
          Submit
        </button>
      </div>
    </div>
  );
});

export default AddNote;
