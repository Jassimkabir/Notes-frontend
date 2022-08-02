import axios from 'axios';
import React, { useState } from 'react';
import './style.css';

function AddNote({ setAddNote, user }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (title, description) => {
    axios.post(`http://localhost:5000/notes/${user.id}/add-note`, {
      title: title,
      description: description,
    });
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
          <button
            onClick={() => handleSubmit(title, desc)}
            className='btn btn-primary'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
