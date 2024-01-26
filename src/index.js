import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from "./error-page";
import ProductList from './components/sections/ProductList';
import Homepage from "./components/Homepage/Homepage";
import ItemInfo from './components/sections/ItemInfo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Homepage />
      },
      {
        path: "products/:prodId",
        element: <ProductList />
      },
      {
        path:"products/:prodId/:itemId",
        element: <ItemInfo />
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
