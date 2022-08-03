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
    addNote(title, desc);
    setAddNote(false);
  };
  return (
    <div className='addNoteContainer'>
      <div className='containerBox'>
        <button onClick={() => setAddNote(false)} className='closeMark'>
          <i class='fa-solid fa-circle-xmark'></i>
        </button>
        <h3 className='text-center'>Add Note</h3>
        <div className='inputFields'>
          <label>Title :</label>
          <div className='inputContainer'>
            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='w-100'
            />
          </div>
          <label>Description :</label>
          <div className='inputContainer'>
            <textarea
              cols='30'
              rows='10'
              onChange={(e) => setDesc(e.target.value)}
              type='text'
              className='textArea w-100'
            ></textarea>
          </div>
        </div>
        <div>
          <button onClick={() => handleSubmit()} className='btn btn-primary'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
});

export default AddNote;
