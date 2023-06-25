import { HttpConnect } from '../services/http';
import { apiEndpoints, apiHeaderAuth } from '../common/const';
import { HttpConfig, GenericAuth } from '../common/interfaces';
import FormData = require('form-data');

/**
 * Generate a JWT token or refresh an existing one.
 *
 * @param refresh A boolean value to indicate if a refresh token is needed
 * @param action Generate a new token or refresh an existing one
 * @param username The Sonetel username
 * @param password The Sonetel password
 * @param refreshToken The refresh token. Required if refresh is true.
 * @returns The JWT token or raises an error the request fails
 */
export async function generateJwt(
  refresh: boolean = false,
  action: string = 'new',
  username?: string,
  password?: string,
  refreshToken?: string,
) {
  const form = new FormData();
  let refreshParam = 'no';
  let grantType = 'password';

  if (refresh) {
    refreshParam = 'yes';
  }

  if (action === 'refresh') {
    grantType = 'refresh_token';
    form.append('refresh_token', refreshToken);
  } else if (action === 'new') {
    grantType = 'password';
    form.append('username', username);
    form.append('password', password);
  } else {
    throw new Error('Invalid action');
  }

  form.append('grant_type', grantType);
  form.append('refresh', refreshParam);

  const apiAuth: GenericAuth = {
    username: 'sonetel-api',
    password: 'sonetel-api',
  };

  const httpConfig: HttpConfig = {
    method: 'post',
    baseURL: apiEndpoints.auth.base,
    url: apiEndpoints.auth.endpoint,
    auth: apiAuth,
    headers: {
      'Content-Type': apiHeaderAuth,
      ...form.getHeaders(),
    },
    data: form,
  };
  const http = new HttpConnect();
  const response = await http.request(httpConfig);
  // Check the response and set the acces and refresh tokens if successful.
  if (response.access_token) {
    return response; // generated successfully
  }
  return false; // failed to generate
}
