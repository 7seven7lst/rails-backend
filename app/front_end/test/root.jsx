import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './containers/home.jsx';
import LoginPage from './containers/login.jsx';
import SignupPage from './containers/signup.jsx';
import NotFoundPage from './containers/notFound.jsx';
import PrivateRoute from './containers/privateRoute.jsx';
import configureStore from './configureStore.js';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore();
const history = createBrowserHistory();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<NotFoundPage />}
          onBeforeLift={() => {}}
          persistor={persistor}
        >
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignupPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
