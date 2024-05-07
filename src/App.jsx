import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import './App.css'


function App() {
  return (
    <div className='Main'>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
