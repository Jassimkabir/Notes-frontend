import { makeAutoObservable } from 'mobx';
import { getAllNotes, deleteNote, addNote, updateNote } from '../../api/notes';

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
    const resp = await addNote(this.userId, title, desc);

    const newNote = {
      date: resp.data.date,
      description: resp.data.description,
      id: resp.data.id,
      title: resp.data.title,
      user_id: this.userId,
    };
    if (resp.status === 200) {
      this.notes.unshift(newNote);
    }
  };

  updateNote = async (title, desc) => {
    const resp = await updateNote(this.noteId, title, desc);
    if (resp.status === 200) {
      const index = this.notes.findIndex((e) => e.id === this.noteId);
      if (index !== -1) {
        this.notes[index] = resp.data;
      }
    }
  };
}
export default notesStore;
