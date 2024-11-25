import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Page404 from './Pages/Page404.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '*',
        element: <Page404 />
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
