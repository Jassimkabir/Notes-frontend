import axios from './axios';

export const getAllNotes = (userId) => {
  axios.get(`/notes/${userId}/get-all-notes`);
};
