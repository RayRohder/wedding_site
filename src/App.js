import React, { Component } from 'react';

// Components
import Header from './Components/header';
import Footer from './Components/footer';
import HomePage from './Components/Pages/homePage';
import Nav from './Components/nav';

// includes
import './Assets/css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <HomePage />

        <Footer />
      </div>
    );
  }
}

export default App;
