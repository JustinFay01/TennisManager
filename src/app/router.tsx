import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Customers } from './routes/pages/customers';
import { Error } from './routes/pages/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
