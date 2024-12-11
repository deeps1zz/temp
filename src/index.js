import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TemperatureController from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemperatureController />
  </React.StrictMode>
);

