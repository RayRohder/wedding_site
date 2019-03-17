import React, { Component } from 'react';
import Countdown from '../countdown';
import Weather from '../weather';

import foto from '../../Assets/resources/RayLies1000x700.png';

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <div className="home">
          <h1>Raymond & Liesbeth</h1>
          <h2>Zeggen JA op 31 mei 2019</h2>
          <h3>Dat is al over</h3>
          <Countdown/>
        </div>
        <br />
        <div className="update">
        <Weather/><br />
          <p>
            Houd de website in de gaten voor eventuele updates!
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
