import React, { Component } from 'react';
import logo from '../Assets/resources/150x120.png';
import Nav from './nav';

class Header extends Component {
  render() {
    return (
      <header>
      <Nav />
        <div className="logo">
          <img src={logo}/>
        </div>
      </header>
    );
  }
}

export default Header;
