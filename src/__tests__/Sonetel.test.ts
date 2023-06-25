import { Sonetel } from '../index';
import { HttpConfig } from '../common/interfaces';

require('dotenv').config();

const username = process.env.SONETEL_USERNAME!;
const password = process.env.SONETEL_PASSWORD!;
const accountId = process.env.SONETEL_ACCOUNT_ID!;
const userId = process.env.SONETEL_USER_ID!;

test('Basic', async () => {
  const sonetel = new Sonetel(username, password);
  const token1 = await sonetel.generateToken();
  const token2 = await sonetel.generateToken(true);

  expect(sonetel.username).toBe(username);
  expect(sonetel.password).toBe(password);
  expect(token1).toBeTruthy();
  expect(token2).toBeTruthy();
  expect(token1.access_token).toContain('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9');
  expect(token1.refresh_token).toBeUndefined();
  expect(token2.refresh_token).toContain('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9');
});

test('Account', async () => {
  const sonetel = new Sonetel(username, password);
  const account = await sonetel.getAccount();

  expect(account.response.name).toBe('Daisy International Pvt Ltd');
  expect(account.response.account_id).toBe(accountId);
  expect(account.response.account_type).toBe('main_account');
});