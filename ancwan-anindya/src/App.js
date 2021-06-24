import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { FooterContainer } from './container/Footer'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;
