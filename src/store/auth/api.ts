import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({ baseURL: 'http://localhost:5000/users/'});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
  
});

export default instance;
