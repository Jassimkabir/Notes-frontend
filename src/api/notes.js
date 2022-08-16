import axios from './axios';

export const getAllNotes = async (userId) => {
  return await axios.get(`/notes/${userId}/get-all-notes`);
};

export const deleteNote = async (id) => {
  await axios.post(`/notes/delete-note/${id}`);
};

export const addNote = async (userId, title, desc) => {
  return await axios.post(`/notes/${userId}/add-note`, {
    title: title,
    description: desc,
  });
};

export const updateNote = async (id, title, desc) => {
  return await axios.post(`/notes/update-note/${id}`, {
    title: title,
    description: desc,
  });
};
