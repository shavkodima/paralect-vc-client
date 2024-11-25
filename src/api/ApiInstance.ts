import axios from 'axios';

const ApiInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  return instance;
};

export default ApiInstance;
