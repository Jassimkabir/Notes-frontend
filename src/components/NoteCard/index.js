import moment from 'moment';
import React from 'react';
import axios from '../../api/axios';
import './style.css';

function NoteCard({
  item,
  setDeleteNote,
  setExpandCard,
  setNoteId,
  setNoteDetails,
}) {
  const onDelete = () => {
    setDeleteNote(true);
    setNoteId(item.id);
  };
  const onExpand = () => {
    axios.get(`/notes/get-note/${item.id}`).then((response) => {
      setNoteDetails(response.data);
    });
    setExpandCard(true);
  };
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
            <button onClick={() => onDelete()} className='actionButton'>
              <i className='fa-solid fa-trash'></i>
            </button>
            <button className='actionButton'>
              <i className='fa-solid fa-pen-to-square'></i>
            </button>
            <button onClick={() => onExpand()} className='actionButton'>
              <i class='fa-solid fa-expand'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
