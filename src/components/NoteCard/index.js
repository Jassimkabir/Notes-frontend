import React from 'react';
import './style.css';

function NoteCard({ setDeleteNote }) {
  return (
    <div className='cardContainer'>
      <div className='cardContents'>
        <div className='cardHead'>
          <h5>Grocery shop</h5>
        </div>
        <div className='cardBody'>
          <span>
            Go to the grocery shop and buy Lorem ipsum is placeholder text
            commonly used in the graphic, print, and publishing industries ...
          </span>
        </div>
        <div className='cardFooter d-flex justify-content-between align-items-center'>
          <span className='date'>March 31, 2022</span>
          <div className='actionsDiv d-flex'>
            <button
              onClick={() => setDeleteNote(true)}
              className='actionButton'
            >
              <i className='fa-solid fa-trash'></i>
            </button>
            <button className='actionButton'>
              <i className='fa-solid fa-pen-to-square'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
