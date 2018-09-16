// Action constants
const AUTH_REQUEST = 'AUTH_REQUEST';
const AUTH_RECEIVED = 'AUTH_RECEIVED';
const AUTH_FAILED = 'AUTH_FAILED';
const AUTH_SIGNOUT = 'AUTH_SIGNOUT';

export const action = {
  AUTH_REQUEST,
  AUTH_RECEIVED,
  AUTH_FAILED,
  AUTH_SIGNOUT,
};

export const url = {
  LOGIN: '/api/v1/auth/sign_in',
  LOGOUT: '/api/v1/auth/sign_out',
};

