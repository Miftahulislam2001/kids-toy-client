import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { AuthProvider } from './Context/AuthProvider';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
