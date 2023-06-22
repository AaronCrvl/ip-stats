import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Commented to prevent from double call on api methods.
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// analysis
reportWebVitals(console.log);
