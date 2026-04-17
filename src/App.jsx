import { useState } from 'react'

import './App.css'
import Home from './compenent/Home'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
