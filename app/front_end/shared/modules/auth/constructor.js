import _ from 'lodash';

const initialState = {
  loading: false,
  isAuthenticated: false,
  client: null,
  accessToken: null,
  uid: null,
  expiry: null,
};


class AuthUser {
  constructor(authUserHash = initialState) {
    this.authUser = authUserHash;
  }

  get initialState() {
    return initialState;
  }

  changeState(newState) {
    return _.assign({}, this.authUser, newState);
  }
}

export default AuthUser;
