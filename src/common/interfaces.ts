export interface HttpConfig {
  method: string;
  auth?: GenericAuth;
  baseURL: string;
  url: string;
  headers?: any;
  data?: any;
}

export interface GenericAuth {
  username: string;
  password: string;
}

export interface SonetelAccessToken {
  aud: string;
  user_id: string;
  user_name: string;
  scope: string[];
  iss: string;
  exp: number;
  iat: number;
  jti: string;
  acc_id: number;
  client_id: string;
}

export interface SonetelRefreshToken {
  aud: string;
  user_id: string;
  user_name: string;
  scope: string[];
  ati: string;
  iss: string;
  exp: number;
  iat: number;
  jti: string;
  acc_id: number;
  client_id: string;
}
