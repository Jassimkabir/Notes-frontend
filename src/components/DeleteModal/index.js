import React from 'react';
import './style.css';

function DeleteModal({ setDeleteNote }) {
  return (
    <div className='divContainer d-flex justify-content-center'>
      <div className='deleteModalContainer d-flex flex-column justify-content-between'>
        <div className='text-center'>
          <h5 className='p-3'>
            <i className='fa-solid fa-circle-exclamation me-2'></i>Confirm
            delete?
          </h5>
        </div>
        <div className='divFoot d-flex justify-content-end p-1'>
          <button
            onClick={() => setDeleteNote(false)}
            className='btn btn-secondary me-2'
          >
            No
          </button>
          <button className='btn btn-danger'>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
