import { HttpConnect } from './services/http';
import { apiBaseAuth, apiHeaderAuth, apiEndpointAuth } from './common/const';
import FormData = require('form-data');

export class Sonetel {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  generateToken = async (refresh: boolean = false) => {
    const form = new FormData();
    form.append('grant_type', 'password');
    form.append('username', this.username);
    form.append('password', this.password);
    form.append('refresh', 'yes');

    const httpConfig: object = {
      method: 'post',
      baseURL: apiBaseAuth,
      url: apiEndpointAuth,
      auth: {
        username: 'sonetel-api',
        password: 'sonetel-api'
      },
      headers: {
        'Content-Type': apiHeaderAuth,
        ...form.getHeaders(),
      },
      data: form,
    };
    const http = new HttpConnect();
    const response = await http.request(httpConfig);
    return response;
  }

  getAccount() {
    return 'Sonetel getAccount';
  }

  getUsers() {
    return 'Sonetel getUers';
  }
}
