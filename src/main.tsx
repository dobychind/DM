import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render( // Use ReactDOM.render for React 17 or below
  <React.StrictMode>
    <BrowserRouter basename="/DM/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
