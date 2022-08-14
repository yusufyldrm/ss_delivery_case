import axios from 'axios';

export const API_URL = 'https://simplicityhw.cotunnel.com/graphql';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const config = (...rest) => {
  return {
    ...rest,
    headers: {
      ...rest?.headers,
      Authorization: `Bearer ${window.localStorage.getItem('authToken')}`,
    }
  };
};

export default api;
