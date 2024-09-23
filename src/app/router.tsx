import { createBrowserRouter } from "react-router-dom";
import { Customers } from "./routes/pages/customers";
import { Error } from "./routes/pages/error";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Customers />,
      },
      {
        path: "*",
        element:<Error />
      },
    ],
  },
]);
