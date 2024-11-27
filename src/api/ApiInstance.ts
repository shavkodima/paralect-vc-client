import axios from 'axios';

const ApiInstance = () => {
  const instance = axios.create({
    baseURL: 'https://ym27ng-3000.csb.app/',
  });

  return instance;
};

export default ApiInstance;
