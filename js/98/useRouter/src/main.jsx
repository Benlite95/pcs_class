import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './About.jsx';
import ContactUs from './ContactUs.jsx';
import Index from './Index.jsx';
import Error from './Error.jsx';

/*const router = createBrowserRouter([
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
        path: '/aboutus',
        element: <About />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '*',
        element: <h5 style={{color: 'red'}}>This is not the page you are looking for... 404</h5>
      }
    ]
  }
]);*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Index />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<h5 style={{ color: 'red' }}>This is not the page you are looking for... 404</h5>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
