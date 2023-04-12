import axios from 'axios';

const proto = 'http';
const host = 'localhost';
const port = '3333';

/**
 * @exports {AxiosInstance}
 */
export const api = axios.create({
  baseURL: `${proto}://${host}:${port}`,
});
