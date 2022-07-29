import axios from './axios';

const getAllNotes = (userId) => {
  axios.get(`/notes/${userId}/get-all-notes`);
};

export { getAllNotes };
