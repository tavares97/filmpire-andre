/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

export const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: REACT_APP_API_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesAPI.get('/authentication/token/new');
    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) {
    try {
      const {
        data: { session_id },
      } = await moviesAPI.post('/authentication/session/new', { request_token: token });

      localStorage.setItem('session_id', session_id);

      return session_id;
    } catch (error) {
      console.error(error);
    }
  }
};
