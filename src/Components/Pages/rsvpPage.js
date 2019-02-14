import React, { Component } from 'react';
import RsvpForm from '../rsvpForm';

class RsvpPage extends Component {
  render() {
    return (
      <div class="rsvp">
        <h1>RSVP</h1>
        <RsvpForm />
      </div>
    );
  }
}

export default RsvpPage;
