import { createBrowserRouter } from "react-router-dom";
import { Customers } from "./pages/customers";
import { Error } from "./pages/error";
import App from "../App";

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
