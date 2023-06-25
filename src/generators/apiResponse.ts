import { HttpConnect } from '../services/http';
import { apiEndpoints } from '../common/const';
import { HttpConfig } from '../common/interfaces';
import {isObjectEmpty} from '../common/functions';

export async function getApiResponse(method: string, url: string, data: object, headers: object) {
  const http = new HttpConnect();
  const httpConfig: HttpConfig = {
    method,
    baseURL: apiEndpoints.base,
    url,
  };
  // Add headers and data if not empty
  if(!isObjectEmpty(headers)) {
    httpConfig.headers = headers;
  }

  if(!isObjectEmpty(data)) {
    httpConfig.data = data;
  }
  try {

    const response = await http.request(httpConfig);
    return response;
  } catch (error) {
    throw new Error(`An error has occurred. HTTP Config:: ${httpConfig.headers}. ${error}.`);
  }
}
