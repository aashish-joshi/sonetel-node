import axios, { Axios } from 'axios';
import { HttpConfig } from '../common/interfaces';

/**
 * @description http
 * @class httpConnect
 * @constructor
 * @param {String} baseUrl - the base URL of the API service
 */
export class HttpConnect {
  request = async (config: HttpConfig) => {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response);
    }
  };

  get = async (endpoint: string, headers: object) => {
    const response = await axios.get(endpoint, (headers = headers));
    return JSON.stringify(response.data);
  };

  post = async (endpoint: string, data: object, headers: object) => {
    const response = await axios.post(endpoint, data, (headers = headers));
    return JSON.stringify(response.data);
  };
}
