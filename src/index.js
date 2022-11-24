import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
import 'materialize-css/dist/css/materialize.min.css';
//import 'https://fonts.cdnfonts.com/css/pokemon-solid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);