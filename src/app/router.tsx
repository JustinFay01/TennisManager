import { createBrowserRouter } from 'react-router-dom';

import { Customers } from './routes/pages/customers';
import { Error } from './routes/pages/error';
import { AppRoot } from './routes/root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
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
