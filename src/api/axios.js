import axios from 'axios';

const EXPRESS_URL =
  process.env.REACT_APP_EXPRESS_URL || 'http://localhost:5000';

const instance = axios.create({
  withCredentials: true,
  baseURL: EXPRESS_URL,
});

export default instance;
