import React, { Component } from 'react';

// Components
import Header from './Components/header';
import Nav from './Components/nav';
import Footer from './Components/footer';
import Main from './Components/main';

// Route Components
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// includes
import './Assets/css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div class="content">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
