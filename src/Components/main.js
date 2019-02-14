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
import RsvpPage from './Pages/rsvpPage';

class Main extends Component {
  render() {
    return (
        <div class="main">
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/info' component={InfoPage} />
            <Route path='/rsvp' component={RsvpPage} />
          </Switch>
        </div>
    );
  }
}

export default Main;
