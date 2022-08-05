import { createContext, useContext } from 'react';
import NotesStore from './Notes/notesStore';
import AuthStore from './Auth/authStore';

const notesStore = new NotesStore();
const authStore = new AuthStore();

export const store = {
  notesStore,
  authStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
