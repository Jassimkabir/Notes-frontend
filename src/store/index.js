import { createContext, useContext } from 'react';
import NotesStore from './Notes/notesStore';

const notesStore = new NotesStore();

export const store = {
  notesStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
