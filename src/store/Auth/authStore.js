import { makeAutoObservable } from 'mobx';
import { getUser } from '../../api/auth';

class authStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (data) => {
    this.user = data;
  };

  getUser = async () => {
    const resp = await getUser();
    this.setUser(resp.user);
  };
}
export default authStore;
