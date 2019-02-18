import React, { Component } from 'react';
import divider from '../../Assets/resources/divider.png';

class InfoPage extends Component {
  render() {
    return (
      <div class="info">
        <p>
          De ceremonie is een openbare gelegenheid. <br />
          Iedereen die zin heeft om te komen, <br />
          is van harte welkom de ceremonie bij te wonen.<br /><br />
        </p>
        <p>
          De ceremonie begint om 11:00 uur bij<br />
          Van der Valk Gilze-Tilburg.<br />
          Klein Zwitserland 8, 5126 TA Gilze<br /><br />
        </p>
        <p>
          Er is geen specifieke dresscode, <br/>
          maar we zouden het leuk vinden als u netjes gekleed komt.<br /><br />
        </p>
        <p>
          Voor vragen kunt u terecht bij onze <br/>
          ceremoniemeester Bie Kin:<br/>
          Bie@BruiloftRayLies.nl
        </p>
      </div>
      );
    }
  }

export default InfoPage;
