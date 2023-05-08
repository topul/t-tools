import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/home'
import Tools from './pages/tools/Tools'
import Image from './pages/image/ImageHandler'
import Time from './pages/tools/time/Time'
import Ascii from './pages/tools/ascii/Ascii'
import Temp from './pages/tools/temp/Temp'
import Base from './pages/tools/Base/Base'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'image',
        element: <Image />,
      },
      {
        path: 'tools',
        element: <Tools />,
      },
      {
        path: 'tools/time',
        element: <Time />,
      },
      {
        path: 'tools/ascii',
        element: <Ascii />,
      },
      {
        path: 'tools/temp',
        element: <Temp />,
      },
      {
        path: 'tools/base',
        element: <Base />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
