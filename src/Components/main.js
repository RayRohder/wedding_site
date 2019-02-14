import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  IndexRoute,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import HomePage from './Pages/homePage';
import InfoPage from './Pages/infoPage';

class Main extends Component {
  render() {
    return (
        <div class="main">
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/Info' component={InfoPage} />
          </Switch>
        </div>
    );
  }
}

export default Main;