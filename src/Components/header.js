import React, { Component } from 'react';
import logo from '../Assets/resources/150x120.png';

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
