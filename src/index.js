// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Import your main App component (you might need to adjust the path)
import Home from './views/home';

// Optional: Add routing later if you expand pages
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
