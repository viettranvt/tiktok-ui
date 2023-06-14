import axios from 'axios';
import config from '~/config';

const request = axios.create({
  baseURL: config.env.BaseUrl,
});

export const get = async (path: string, options = {}) => {
  const response = await request.get(path, options);

  return response.data;
};

export default request;
