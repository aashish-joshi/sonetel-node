import { generateJwt } from './generators/token';
import { getApiResponse } from './generators/apiResponse';
import { apiEndpoints } from './common/const';
import { parseJwt } from './common/functions';
import { SonetelAccessToken, SonetelRefreshToken } from './common/interfaces';

export class Sonetel {
  username: string;
  password: string;
  decodedAccessToken?: SonetelAccessToken;
  _accessToken?: string;
  _refreshToken?: string;
  accountId?: number;
  userId?: string;
  _decoded?: SonetelAccessToken;
  expiry?: number;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  updateProps() {
    if (this._accessToken) {
      this._decoded = parseJwt(this._accessToken);
      this.accountId = this._decoded.acc_id;
      this.userId = this._decoded.user_id;
      this.expiry = this._decoded.exp;
    }
  }

  generateToken = async (refresh: boolean = false, action: string = 'new') => {
    let apiResponse;
    if (action === 'refresh' && this._refreshToken) {
      apiResponse = await generateJwt(refresh, action, this.username, this.password, this._refreshToken);
    } else {
      apiResponse = await generateJwt(refresh, action, this.username, this.password);
    }

    if (!apiResponse) {
      throw new Error('Unable to generate token');
    } else if (apiResponse.access_token) {
      this._accessToken = apiResponse.access_token;
      if (apiResponse.refresh_token) {
        this._refreshToken = apiResponse.refresh_token;
      }
      this.updateProps();
      return apiResponse;
    }
  };

  getAccount = async () => {

    let url;
    let response;
    
    if (!this.accountId || !this._accessToken) {
      await this.generateToken();
    }
    url = `${apiEndpoints.account.endpoint}/${this.accountId}`;
    response = await getApiResponse('get', url, {}, { Authorization: `Bearer ${this._accessToken}` });

    if (response) {
      return response;
    } else {
      throw new Error('Unable to get account' + response);
    }
  };

  getUsers() {
    return 'Sonetel getUers';
  }

  _checkTokenExpiration() {
    return 'TBI';
  }
}
