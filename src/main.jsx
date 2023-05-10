import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Landing from "./components/layouts/Landing/Landing";
import Config from "./components/layouts/Config/Config";
import Game from "./components/layouts/Game/Game";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
        path: '/config',
        element: <Config />,
    },
    {
        path: '/game',
        element: <Game />
    }
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

//test