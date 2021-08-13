import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './services/i18n'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Please wait a minute">
    <Router>
      <App />
    </Router>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

