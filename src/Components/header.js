import React, { Component } from 'react';
import logo from '../Assets/resources/logo_300x250.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo}/>
          </div>
      </header>
    );
  }
}

export default Header;
