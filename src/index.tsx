import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Global } from './assets/css/Global/Global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
