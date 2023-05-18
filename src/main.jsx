import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
import { RouterProvider ,createBrowserRouter } from "react-router-dom";
import ErrorPage from './errorPage.jsx';
import { Login } from './Login'
import { Entrada } from './components/Entrada.jsx';
// import { PerfilUsuario } from './components/PerfilUsuario.jsx';
import  {UserProfile } from './components/PanelUser.jsx';
import RegisterForm from './components/Register.jsx';
import {HotelCard} from './components/Card/HotelCard.jsx';
import Reservations from './components/Reservaciones.jsx';
import ReservationsComponent from './AdminHotel/BuscadorReseras.jsx';
import UserReservation from './AdminHotel/BuscadorReseras.jsx';
import { PageUsuario } from './pages/Usuario/PageUsuario.jsx';
import { PageSuperAd } from './pages/SuperAdmin/PageSuperAd.jsx';
import { PageAdmin } from './pages/Admin/PageAdmin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Entrada/>
      },
      {
        path: '/login',
        element: <Login />
      } ,
      {
        path: '/register',
        element:<RegisterForm/>
      } ,
      {
        path: '/resv',
        element:<UserReservation/>
      } 
      ,
      {
        path: '/user',
        element:<PageUsuario/>
      }
      ,
      {
        path: '/adminH',
        element:<PageAdmin/>
      }
      ,
      {
        path: '/Admin',
        element:<PageSuperAd/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
