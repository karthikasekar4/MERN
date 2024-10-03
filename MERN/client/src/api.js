import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',  // Make sure this is the correct base URL for your backend
});

export default API;
