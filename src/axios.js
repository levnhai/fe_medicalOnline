import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response) => {
  // Thrown error for request with OK status code
  const { data } = response;
  return data;
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
