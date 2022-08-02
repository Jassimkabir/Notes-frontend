import axios from './axios';

export const getAllNotes = async (userId) => {
  return await axios.get(`/notes/${userId}/get-all-notes`);
};

export const deleteNote = async (noteId) => {
  await axios.post(`/notes/delete-note/${noteId}`);
};
