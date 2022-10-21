import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://10.0.2.2:5050',
  responseType: 'json',
    withCredentials: true,
  proxy: false 
});

export default ApiManager;