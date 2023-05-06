import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Image from './pages/image/ImageHandler'
import Time from './pages/time/Time'
import Ascii from './pages/ascii/Ascii'
import Temp from './pages/temp/Temp'
import Base from './pages/Base/Base'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index path='/image' element={<Image />} />
          <Route path='/time' element={<Time />} />
          <Route path='/ascii' element={<Ascii />} />
          <Route path='/temp' element={<Temp />} />
          <Route path='/base' element={<Base />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
