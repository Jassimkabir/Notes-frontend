import React from 'react';
import './style.css';

function AddNote({ setAddNote }) {
  return (
    <div className='addNoteContainer'>
      <div className='containerBox'>
        <div onClick={() => setAddNote(false)} className='closeMark'>
          x
        </div>
        <h3 className='text-center'>Add Note</h3>
        <div className='inputFields'>
          <label>Title :</label>
          <div className='inputContainer'>
            <input type='text' className='w-100' />
          </div>
          <label>Description :</label>
          <div className='inputContainer'>
            <input type='text' className='w-100' />
          </div>
        </div>
        <div>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddNote;