import axios from 'axios';

const EXPRESS_APP_URL = 'http://localhost:5000';

const instance = axios.create({
  baseURL: EXPRESS_APP_URL,
});

export default instance;
