import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import ShipList from './pages/ShipList/ShipList'
import ShipDetailsWithLocation from './pages/ShipDetailsWithLocation/ShipDetailsWithLocation'
import ShipDetailsWithParams from './pages/ShipDetailsWithParams/ShipDetailsWithParams'
import Nav from './components/Nav/Nav'


import './App.css'

function App() {

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/ships' element={<ShipList />}  />
        <Route path='/ships/:shipId' element={<ShipDetailsWithParams />}  />
        <Route path='/ships/details' element={<ShipDetailsWithLocation />}  />
      </Routes>
    </>
  )
}

export default App
