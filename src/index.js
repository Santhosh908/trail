import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
