import React, { Component } from 'react';

// Components
import Header from './Components/header';

import Footer from './Components/footer';
import Main from './Components/main';
import {Container, Row, Col} from 'react-bootstrap';

// Route Components
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'

// includes
import './Assets/css/style.css';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <Router>
          <div className="App">
                <Col>
                    <Header />
                      <Row className="AppRow">
                        <Col className="AppCol">
                          <Main />
                        </Col>
                        <Col className="AppCol">
                        </Col>
                      </Row>
                    <Footer />
                </Col>
          </div>
        </Router>
    );
  }
}

export default App;
