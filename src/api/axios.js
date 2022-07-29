import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.EXPRESS_APP_URL,
});

export default instance;
