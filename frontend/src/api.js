// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4001/api',
  withCredentials: true,
});

export default API;
