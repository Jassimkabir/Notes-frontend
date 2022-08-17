import { makeAutoObservable } from 'mobx';
import { getUser } from '../../api/auth';

class authStore {
  user = null;

  status = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (data) => {
    this.user = data;
  };

  setStatus = (data) => {
    this.status = data;
  };

  getUser = async () => {
    const resp = await getUser();
    this.setUser(resp.data.user);
    this.setStatus(resp.data.status);
  };
}
export default authStore;
