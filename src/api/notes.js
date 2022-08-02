import axios from './axios';

export const getAllNotes = async (id) => {
  return await axios.get(`/notes/${id}/get-all-notes`);
};

export const deleteNote = async (id) => {
  await axios.post(`/notes/delete-note/${id}`);
};
