import React, { Component } from 'react';
import logo from '../Assets/resources/logo.jpg';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          <img src={logo} width="300" height="250" />
        </div>

      </header>
    );
  }
}

export default Header;
