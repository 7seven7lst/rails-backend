import _ from 'lodash';
import { action } from './constants';
import AuthUser from './constructor';

const authUser = new AuthUser();

// Reducer
export default function reducer(state = authUser.initialState, dispatchedAction = {}) {
  switch (dispatchedAction.type) {
    case action.AUTH_REQUEST:
      return authUser.changeState({ 
        loading: true,
      });
    case action.AUTH_RECEIVED:
      return authUser.changeState({
        loading: false,
        isAuthenticated: true,
        uid: dispatchedAction.uid,
        client: dispatchedAction.client,
        accessToken: dispatchedAction.accessToken,
      });
    case action.AUTH_FAILED:
      return authUser.changeState({
        loading: false,
      });
    case action.AUTH_SIGNOUT:
      return authUser.initialState;
    default: return state;
  }
}
