import { SonetelAccessToken, SonetelRefreshToken } from './interfaces';

export function parseJwt(token: string) {
  const decodedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  // Check if the property 'ati' exists in the decoded token
  if (decodedToken.hasOwnProperty('ati')) {
    return decodedToken as SonetelRefreshToken;
  } else {
    return decodedToken as SonetelAccessToken;
  }
}

export const isObjectEmpty = (obj: object) => {
  return JSON.stringify(obj) === '{}';
};