import React from 'react';
import './style.css';

function NoteCard() {
  return (
    <div className='cardContainer'>
      <div className='cardContents'>
        <div className='cardHead'>
          <h5>Grocery shop</h5>
        </div>
        <div className='cardBody'>
          <span>
            Go to the grocery shop and buy Lorem ipsum is placeholder text
            commonly used in the graphic, print, and publishing industries for
            previewing layouts and visual mockups.
          </span>
        </div>
        <div className='cardFooter d-flex justify-content-end'>
          <i class='fa-solid fa-trash'></i>
          <i class='fa-solid fa-pen-to-square'></i>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
