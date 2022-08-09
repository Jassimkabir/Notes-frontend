import React, { useState } from 'react';
import './style.css';

function ExpandCard({ setExpandCard, noteDetails }) {
  const [description, setDesc] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className='expandContainer'>
      <div className='expandContents'>
        <div className='expandHead d-flex justify-content-between align-items-center'>
          <input
            className='w-100 noteTitle'
            type='text'
            defaultValue={noteDetails?.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => setExpandCard(false)} className='closeButton'>
            <i class='fa-solid fa-circle-xmark'></i>
          </button>
        </div>
        <div className='expandBody my-4'>
          <input
            className='w-100 noteDescription'
            type='text'
            defaultValue={noteDetails?.description}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      {(description && description !== noteDetails?.description) ||
      (title && title !== noteDetails?.title) ? (
        <button className='btn btn-primary updateButton'>Update</button>
      ) : null}
    </div>
  );
}

export default ExpandCard;
