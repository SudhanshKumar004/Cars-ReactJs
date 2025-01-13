import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import About from './About'
import Login from './Login'
import { Footer, Nav } from './Navbar'



function App() {

  let local = useLocation()
  let auth = local.pathname === '/signup' || local.pathname === '/login'
  return (
    <>
    {!auth && <Nav />}
    <Routes>

      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

    </Routes>
    {!auth && <Footer />}
    </>
  )
}

export default App
