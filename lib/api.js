// lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3308/api', // URL backend API
  withCredentials: true,
});

export default api;
