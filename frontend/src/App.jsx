import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import FooterComponent from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterComponent />
    </>
  )
}

export default App