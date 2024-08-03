import { createBrowserRouter } from "react-router-dom";
import { Customers } from "./pages/customers";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
]);
