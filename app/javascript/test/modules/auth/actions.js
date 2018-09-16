import axios from 'axios';
import { action, url } from './constants';

// Action Creators
export function authenticate(email, password) {
  return (dispatch, getState) => {
    dispatch(startAuthentication())
    return axios({
      url: url.LOGIN,
      method: 'POST',
      data: { email, password }
    })
    .then(response => {
      const uid = response.headers['uid']
      const client = response.headers['client']
      const accessToken = response.headers['access-token']
      dispatch(successAuthentication(uid, client, accessToken));
    }).catch(error => {
      dispatch(failAuthentication());
    })
  }
}

export function signout() {
  return (dispatch, getState) => {
    const { auth } = getState()
    return axios({
      url: url.LOGOUT,
      method: 'DELETE',
      headers: {
        'access-token': auth.accessToken,
        'client': auth.client,
        'uid': auth.uid
      }
    }).then(response => {
      dispatch(doSignout())
    }).catch(error => {
      console.log(error)
    })
  }
}

export function expireAuthentication() {
  return doSignout();
}

function startAuthentication() {
  return { type: action.AUTH_REQUEST };
}

function successAuthentication(uid, client, accessToken) {
  return { type: action.AUTH_RECEIVED, uid, client, accessToken };
}

function failAuthentication() {
  return { type: action.AUTH_FAILED };
}

function doSignout() {
  return { type: action.AUTH_SIGNOUT };
}
