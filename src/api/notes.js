import axios from './axios';

export const getAllNotes = (userId) => {
  axios.get(`/notes/${userId}/get-all-notes`);
};

export const deleteNote = (noteId) => {
  axios.post(`/notes/delete-note/${noteId}`);
};
