import React, { Component } from 'react';
import logo from '../Assets/resources/logo.jpg';
import Nav from './nav';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          <img src={logo} width="300" height="250" />
        </div>

        <Nav />

      </header>
    );
  }
}

export default Header;
