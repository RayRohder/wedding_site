import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">RSVP</a></li>
            <li><a href="#">{"Foto's"}</a></li>
          </ul>
        </nav>
    );
  }
}

export default Nav;
