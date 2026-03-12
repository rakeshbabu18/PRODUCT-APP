import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import ProductList from './components/ProductList'
import ContactUs from './components/ContactUs'
import Product from './components/Product'

function App() {
  
  const routingobj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path:"",
          element: <Home />
        },
        {
          path: "products",
          element: <ProductList />
        },
        {
          path: "product",
          element: <Product />
        },
        {
          path: "contact",
          element: <ContactUs />
        }
      ]
    }
  ])
  
  return (
    <RouterProvider router={routingobj} />
  )
}

export default App