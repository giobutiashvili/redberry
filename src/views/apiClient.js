import axios from "axios";


const staticToken = '9e253879-d10b-4647-ae03-4f282c2ec23b';


localStorage.setItem('auth_token', staticToken);

const apiClient = axios.create({
  baseURL: "https://api.real-estate-manager.redberryinternship.ge/api",
});

apiClient.interceptors.request.use((config) => {

  const token = localStorage.getItem('auth_token') || staticToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  }
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';


  return config;
});

export default apiClient;