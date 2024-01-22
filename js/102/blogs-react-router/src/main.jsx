import ReactDOM from 'react-dom/client';
import './index.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import BlogList from './BlogList';
import Blog, { loader } from './Blog';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <BlogList />
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: loader,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
