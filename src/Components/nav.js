import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import HomePage from './Pages/homePage';
import InfoPage from './Pages/infoPage';

class Nav extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/info'}>Info</Link></li>
            <li><a href="#">RSVP</a></li>
          </ul>
        </nav>
    );
  }
}

export default Nav;
