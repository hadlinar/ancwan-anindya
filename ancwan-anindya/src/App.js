import React from 'react';
import './App.css';
// import Navigation from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import OurCompany from './components/pages/our company/OurCompany';
import Vpti from './components/pages/vpti/Vpti';
import ContactUs from './components/pages/contact us/ContactUs';
import OurServices from './components/pages/our services/OurServices';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/our-company" component={OurCompany}/>
          <Route path="/vpti" component={Vpti}/>
          <Route path="/contact-us" component={ContactUs}/>
          <Route path="/our-service" component={OurServices}/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
