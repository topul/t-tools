import Home from '../pages/home/home'
import Tools from '../pages/tools/Tools'
import Image from '../pages/image/ImageHandler'
import Time from '../pages/tools/time/Time'
import Ascii from '../pages/tools/ascii/Ascii'
import Temp from '../pages/tools/temp/Temp'
import Base from '../pages/tools/Base/Base'
import System from '../pages/system/System'

export default [
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
      {
        path: 'system',
        element: <System />,
      },
    ],
  },
]
