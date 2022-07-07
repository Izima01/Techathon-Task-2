import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import TopSection from './Components/TopSection'
import Productive from './Components/Productive'
import Access from './Components/Access'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <TopSection />
      <Productive />
      <Access />
      <Footer />
    </div>
  )
}

export default App
