import React, { useState } from 'react';
import './style.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';

const ExpandCard = observer(({ setExpandCard, noteDetails }) => {
  const [title, setTitle] = useState(noteDetails?.title);
  const [description, setDescription] = useState(noteDetails?.description);

  const { notesStore } = useStore();
  const { updateNote, setNoteId } = notesStore;

  setNoteId(noteDetails?.id);

  const onUpdate = () => {
    if (/^\s*$/.test(title && description)) {
      return;
    }
    updateNote(title, description);
    setExpandCard(false);
  };

  return (
    <div className='expandContainer'>
      <div className='expandCard'>
        <div className='expandContents'>
          <div className='expandHead d-flex justify-content-between align-items-center'>
            <input
              className='w-100 noteTitle'
              type='text'
              placeholder='Title'
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={() => setExpandCard(false)}
              className='closeButton'
            >
              <i class='fa-solid fa-circle-xmark'></i>
            </button>
          </div>
          <div className='expandBody my-4'>
            <textarea
              cols='30'
              rows='100'
              placeholder='Start Typing'
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
              type='text'
              className='textArea w-100'
            ></textarea>
          </div>
        </div>
        {(description && description !== noteDetails?.description) ||
        (title && title !== noteDetails?.title) ? (
          <button
            onClick={() => onUpdate()}
            className='btn btn-primary updateButton'
          >
            Update
          </button>
        ) : null}
      </div>
    </div>
  );
});

export default ExpandCard;
