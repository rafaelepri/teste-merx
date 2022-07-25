import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

function Api(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
  });

  api.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${process.env.REACT_APP_TOKEN}`;

  api.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => error?.response?.data
  );

  return api;
}

export const api = Api();
