import { makeAutoObservable } from 'mobx';
import { getAllNotes, deleteNote } from '../../api/notes';

class notesStore {
  notes = [];

  noteId = null;

  constructor() {
    makeAutoObservable(this);
  }

  setNotes = (data) => {
    this.notes = data;
  };

  getAllNotes = async (userId, successCB) => {
    const resp = await getAllNotes(userId);
    if (resp.status === 200) {
      this.setNotes(resp.data);
    }
  };

  setNoteId = (id) => {
    this.noteId = id;
  };

  deleteNote = async (successCB) => {
    await deleteNote(this.noteId);
    const index = this.notes.findIndex((e) => e.id === this.noteId);
    this.notes.splice(index, 1);
  };
}
export default notesStore;
