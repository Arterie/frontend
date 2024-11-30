import axios from 'axios';

// Base URL til backend
const API_BASE_URL = 'http://localhost:5245/'; // Bytt til riktig URL for Sub-application 1 backend

export const fetchPosts = () => axios.get(`${API_BASE_URL}/Posts`);