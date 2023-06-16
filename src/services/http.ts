import axios, { Axios } from 'axios';

/**
 * @description http
 * @class httpConnect
 * @constructor
 * @param {String} baseUrl - the base URL of the API service
 */
export class HttpConnect {

  request = async (config: object) => {
    try {
        const response = await axios(config);
        return response.data;
    } catch (error: any) {
        throw new Error(JSON.stringify(error.response.data));
    }
  }

  get = async(endpoint: string, headers: object) => {
    const response = await axios.get(endpoint, headers = headers);
    return JSON.stringify(response.data);
  }

  post = async (endpoint: string, data: object, headers: object) => {
    const response = await axios.post(endpoint, data, headers = headers);
    return JSON.stringify(response.data);
  }
}
