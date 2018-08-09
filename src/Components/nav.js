import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li className="first"><a href="#">Home</a></li>
            <li><a href="#">RSVP</a></li>
            <li className="last"><a href="#">{"Foto's"}</a></li>
          </ul>
        </nav>
    );
  }
}

export default Nav;
