import moment from 'moment';
import React, { useState } from 'react';
import './style.css';

function NoteCard({ item, setDeleteNote, setExpandCard }) {
  return (
    <div className='cardContainer'>
      <div className='cardContents'>
        <div className='cardHead'>
          <h5>{item?.title}</h5>
        </div>
        <div className='cardBody'>
          <span>{item?.description}</span>
        </div>
        <div className='cardFooter d-flex justify-content-between align-items-center'>
          <span className='date'>
            {moment(item.date).format('MMMM Do, YYYY')}
          </span>
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
            <button
              onClick={() => setExpandCard(true)}
              className='actionButton'
            >
              <i class='fa-solid fa-expand'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
