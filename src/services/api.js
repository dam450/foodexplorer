import axios from 'axios';

const port = '3333';
const host = 'localhost';

/**
 * @exports {AxiosInstance}
 */
export const api = axios.create({
  baseURL: `http://${host}:${port}`,
});
