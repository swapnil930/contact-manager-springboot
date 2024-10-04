import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
//fontawesome import
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
//import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import bootstrap js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>
);

