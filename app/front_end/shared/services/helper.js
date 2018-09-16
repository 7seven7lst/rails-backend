import _ from 'lodash';

export getAuthToken(authState) {
  const authToken =  _.get(authState, ['accessToken']);
  if(!authToken) {
    return;
  } else {
    return `Bearer ${authToken}`;
  }
}
