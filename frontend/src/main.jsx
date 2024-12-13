import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Page404 from './Pages/Page404.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import ShopPage from './Pages/Shop Page/ShopPage.jsx';

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
      },
      {
        path: "/search",
        element: <SearchPage />
      },
      {
        path: "/shop",
        element: <ShopPage />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
