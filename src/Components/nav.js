import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import logo from '../Assets/resources/150x120.png';

import HomePage from './Pages/homePage';
import InfoPage from './Pages/infoPage';
import RsvpPage from './Pages/rsvpPage';

class Nav extends Component {
  render() {
    return (
      <nav>
            <NavLink className="link" to={'/'}>Home</NavLink>
            <NavLink className="link" to={'/info'}>Info</NavLink>
	          {/*<NavLink className="link" to={'/rsvp'}>RSVP</NavLink>*/}
      </nav>
    );
  }
}

export default Nav;
