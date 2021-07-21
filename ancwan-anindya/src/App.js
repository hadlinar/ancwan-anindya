import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import OurCompany from './components/pages/our company/OurCompany';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/our-company" component={OurCompany}/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
