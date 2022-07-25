import React from 'react';
import './style.css';

function ExpandCard({ setExpandCard }) {
  return (
    <div className='expandContainer'>
      <div className='expandContents'>
        <div className='expandHead d-flex justify-content-between align-items-center'>
          <h3>Grocery shop</h3>
          <button onClick={() => setExpandCard(false)} className='closeButton'>
            <i class='fa-solid fa-circle-xmark'></i>
          </button>
        </div>
        <div className='expandBody p-2'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExpandCard;
