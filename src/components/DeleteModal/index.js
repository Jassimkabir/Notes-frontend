import React from 'react';
import './style.css';
import { useStore } from '../../store/index';
import { observer } from 'mobx-react-lite';

const DeleteModal = observer(({ setDeleteNote, noteId }) => {
  const { notesStore } = useStore();
  const { deleteNote, setNoteId } = notesStore;

  setNoteId(noteId);

  const confirmDelete = () => {
    deleteNote();
    setDeleteNote(false);
  };
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
          <button onClick={() => confirmDelete()} className='btn btn-danger'>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
});

export default DeleteModal;
