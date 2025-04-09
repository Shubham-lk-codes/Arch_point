import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
    </div>
  )
}

export default HomePage