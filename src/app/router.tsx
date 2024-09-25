import { createBrowserRouter } from 'react-router-dom';

import { Customers } from './routes/pages/customers';
import { Error } from './routes/pages/error';
import AppProvider from './provider';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppProvider />,
    children: [
      {
        path: '/',
        element: <Customers />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
