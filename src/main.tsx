import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);
