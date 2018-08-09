import React, { Component } from 'react';

// Components
import Header from './Components/header';
import Footer from './Components/footer';
import HomePage from './Components/Pages/homePage';
import LoginPage from './Components/Pages/loginPage';


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
        <Header />
        <HomePage />

        <Footer />
      </div>
    );
  }
}

export default App;
