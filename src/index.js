import React from 'react';
import ReactDOM from 'react-dom/client';
import VendingMachine from './VendingMachine';

const App = () => (
  <div>
    <h1>Vending Maching</h1>
    <VendingMachine />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);