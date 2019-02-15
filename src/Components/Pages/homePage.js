import React, { Component } from 'react';
import Countdown from '../countdown';

import foto from '../../Assets/resources/RayLies1000x700.png';

class HomePage extends Component {
  render() {
    return (
      <div class="home">
        <h1>Raymond & Liesbeth</h1>
        <h2>Zeggen JA over</h2>
        <Countdown/>
        <p>
          Houd de website in de gaten voor eventuele updates!
        </p>

      </div>
    );
  }
}

export default HomePage;
