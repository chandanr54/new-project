import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './compenent/Navbar'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
