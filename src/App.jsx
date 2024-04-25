import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <Link to='/teachers'>teachers</Link>
    <Link to='/student'>students</Link>
    <Link to='/staff'>staff</Link>
    <Link to='/subject'>subject</Link>
    <Link to='/class'>class</Link>
    <Link to='/notice'>notice</Link>
    <Link to='/fee'>fee</Link>
    <Link to='/Admission'>Admission</Link>
    <Link to='/result'>result</Link>
    <Link to='/others'>others</Link>
    <Link to='/id'>id</Link>
    <Link to='/salary'>salary</Link>
    <Link to='/report'>report</Link>
    
    </>
  )
}

export default App
