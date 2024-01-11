import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Buy from './Buy.jsx';
import Sell from './Sell.jsx';
import Index from './Index.jsx';
import Error from './Error.jsx';
import PageNotFound from './PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/buy',
        element: <Buy />
      },
      {
        path: '/sell',
        element: <Sell />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
