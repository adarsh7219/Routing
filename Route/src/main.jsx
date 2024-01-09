import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layoute from './Layoute.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layoute></Layoute>,
    children: [
      {
        path: "",
        element: <Home></Home>

      },

      {
        path: "about",
        element: <About></About>

      },
      {
        path: "Contact",
        element: <Contact></Contact>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
