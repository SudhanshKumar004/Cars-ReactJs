import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import { Footer, Nav } from './Navbar'
import Book from './Book'
import Dashboard from './Dash'



function App() {

  let local = useLocation()
  let auth = local.pathname === '/signup' || local.pathname === '/login'
  return (
    <>
    {!auth && <Nav />}
    <Routes>

      <Route index element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/book' element={<Book />} />
      <Route path='/dash' element={<Dashboard />} />

    </Routes>
    {!auth && <Footer />}
    </>
  )
}

export default App
