import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import Main from './Main';
import Signin from './Signin';

ReactDOM.render(
  <Router history={history}>
    <div className="thin-container">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
