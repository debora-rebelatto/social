import ReactDOM from 'react-dom/client';
import './styles/index.css';
import React from 'react';
import { AppRouter } from './routes/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
