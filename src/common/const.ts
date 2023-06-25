export const apiHeaderAuth: string = 'application/x-www-form-urlencoded';

export const apiEndpoints = {
  auth: {
    base: 'https://api.sonetel.com',
    endpoint: '/SonetelAuth/oauth/token',
  },
  base: 'https://public-api.sonetel.com',
  account: {
    endpoint: '/account',
    nested: {
      users: {
        endpoint: '/users',
      },
      numberSubscriptions: {
        endpoint: '/phonenumbersubscription',
      },
      voiceApps: {
        endpoint: '/voiceapp',
      },
    },
  },
};
