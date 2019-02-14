import React, { Component } from 'react';
import divider from '../../Assets/resources/divider.png';

class InfoPage extends Component {
  render() {
    return (
<div class="info">
  <h1>Raymond & Liesbeth</h1>
  <img src={divider}/>
  <h2>Zeggen JA op</h2>
  <h2>31 MEI 2019</h2>

  <p>
    De ceremonie begint om 11:00 uur bij<br />
    Van der Valk Gilze-Tilburg.
  </p>
  <p>
    We willen graag de hele dag met jullie vieren.<br />
    We verwachten jullie rond 10:30 uur bij het hotel,<br />
    Klein Zwitserland 8, 5126 TA Gilze<br />
  </p>
  <img src={divider}/>
  <p>
    Wij hopen dat je aanwezig kan zijn.<br />
    Wil je laten weten of je komt? Dit kan via:<br />
    de RSVP pagina of<br />
    Bie@ BruiloftRayLies.nl
  </p>
</div>
);
}
}

export default InfoPage;
