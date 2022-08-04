import { makeAutoObservable } from 'mobx';
import { getAllNotes, deleteNote, addNote } from '../../api/notes';

class notesStore {
  notes = [];

  noteId = null;

  userId = null;

  constructor() {
    makeAutoObservable(this);
  }

  setNotes = (data) => {
    this.notes = data;
  };

  setNoteId = (id) => {
    this.noteId = id;
  };

  setUserId = (id) => {
    this.userId = id;
  };

  getAllNotes = async () => {
    const resp = await getAllNotes(this.userId);
    if (resp.status === 200) {
      this.setNotes(resp.data);
    }
  };

  deleteNote = async () => {
    await deleteNote(this.noteId);
    const index = this.notes.findIndex((e) => e.id === this.noteId);
    this.notes.splice(index, 1);
  };

  addNote = async (title, desc) => {
    await addNote(this.userId, title, desc);
  };
}
export default notesStore;
