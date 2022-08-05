import { makeAutoObservable } from 'mobx';

class notesStore {
  constructor() {
    makeAutoObservable(this);
  }
}
export default notesStore;
