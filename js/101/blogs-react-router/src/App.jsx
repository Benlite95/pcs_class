import { useState } from 'react';
import './App.css';
import Blog from './Blog';
import BlogList from './BlogList';
import Header from './Header';
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const [selectedBlog, setSelectedBlog] = useState();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Header setSelectedBlog={setSelectedBlog} />
        <Outlet />
        {selectedBlog && <Blog selectedBlog={selectedBlog} />}
      </>,
      children: [
        /*{
          path: '/foo',
          element: <div>This is foo!</div>
        }*/
        {
          index: true,
          element: <BlogList setSelectedBlog={setSelectedBlog} />
        }
      ]
    },
    /*{
      path: '/foo',
      element: <div>This is foo!</div>
    },*/
    {
      path: '*',
      element: <Navigate to="/" replace={true} />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
