import React, { useEffect, useState } from 'react';
import './style.css';

function ExpandCard({ setExpandCard, noteDetails }) {
  return (
    <div className='expandContainer'>
      <div className='expandContents'>
        <div className='expandHead d-flex justify-content-between align-items-center'>
          <h3>{noteDetails?.title}</h3>
          <button onClick={() => setExpandCard(false)} className='closeButton'>
            <i class='fa-solid fa-circle-xmark'></i>
          </button>
        </div>
        <div className='expandBody p-2'>
          <span>{noteDetails?.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpandCard;
