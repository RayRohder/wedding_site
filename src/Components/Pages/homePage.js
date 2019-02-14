import React, { Component } from 'react';
import divider from '../../Assets/resources/divider.png';
import foto from '../../Assets/resources/RayLies1000x700.png';

class HomePage extends Component {
  render() {
    return (
      <div class="home">
        <img src={foto}/>
      </div>
    );
  }
}

export default HomePage;
