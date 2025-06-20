import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend:3001',
});

export default api;
