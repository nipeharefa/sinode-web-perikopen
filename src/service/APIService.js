import axios from 'axios';

const baseURL = process.env.REACT_APP_DOMAIN || 'http://localhost:8000';

const config = {
  baseURL: baseURL,
  headers: {
    'Accept': 'application/json',
  },
};

export default axios.create(config);