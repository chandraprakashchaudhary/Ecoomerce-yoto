import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";

import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Register from "./Pages/Auth/Register/Register";
import Client from "./Components/Client/Client";
import Recent from "./Components/Recent/Recent";
import { Provider } from "react-redux";
import CartPage from './Pages/ Cart/CartPage'
import store from "./redux/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about us",
        element: <Client />,
      },

      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MainLayout /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
