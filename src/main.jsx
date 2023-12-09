import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import MyRouts from './MyRouts/MyRouts.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProviders from './Components/Authentication/AuthProviders.jsx';
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <React.StrictMode>
          <RouterProvider router={MyRouts} />
        </React.StrictMode>
      </AuthProviders>
    </QueryClientProvider>
  </HelmetProvider>
  ,
)
