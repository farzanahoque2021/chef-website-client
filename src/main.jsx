import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import HomePage from './components/HomePage/HomePage';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage'
import ChefDetails from './components/ChefDetails/ChefDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('https://chef-website-server-farzanahoque2021.vercel.app/chef')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '/chef/:id',
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) => fetch(`https://chef-website-server-farzanahoque2021.vercel.app/chef/${params.id}`)
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }

    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
