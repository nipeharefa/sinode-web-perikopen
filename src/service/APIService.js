import axios from 'axios';

const config = {
  baseURL: 'http://localhost:8000',
  headers: {
    'Accept': 'application/json',
  },
}

export default axios.create(config);