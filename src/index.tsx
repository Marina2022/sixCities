import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const settings = {
  PLACE_QUANTITY: 315
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placeQuantity={settings.PLACE_QUANTITY} />
  </React.StrictMode>,
);
