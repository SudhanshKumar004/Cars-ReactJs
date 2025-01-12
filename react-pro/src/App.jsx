import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Layout from './Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route index path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      </Route>
    </Routes>
    </>
  )
}

export default App
