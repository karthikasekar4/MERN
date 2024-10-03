import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18+
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import your main App component
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import global styles (if you have any)

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element

root.render(
  <React.StrictMode>
    <Router>
      <App /> 
    </Router>
  </React.StrictMode>
);
