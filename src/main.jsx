import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './errorPage.jsx';
import ReactDOM from 'react-dom/client'
import { Login } from './Login'
import { Entrada } from './components/Entrada.jsx';
import HotelCard from './card/HotelCard';
import { PerfilUsuario } from './components/PerfilUsuario.jsx';
import  {UserProfile } from './components/PanelUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Entrada/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element:<Login/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/hoteles",
    element: <HotelCard/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/UserPanel",
    element: <UserProfile/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
