import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Main from './assets/Layout/Main.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Pages/Login.jsx'
import Account from './Pages/Account.jsx'
import SingUp from './Pages/SingUp.jsx'
import { AuthContextProvider } from './AuthContext/AuthProvider.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singUp',
        element:<SingUp></SingUp>
      },
      {
        path:'/account',
        element:<ProtectedRoute><Account></Account></ProtectedRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>

)
