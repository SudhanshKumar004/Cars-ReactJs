import { Link, Outlet } from 'react-router-dom'
import './Nav.css'

const Nav = ()=>{
    return(
        <>
        <header>
          <nav className='nav'>
            <h1>Cars</h1>
            <ul className="ul">
        <li>
          <a><Link to={"/home"}>Home</Link></a>
          <a><Link to={"/about"}>About</Link></a>
          <a><Link to={"/signup"}>Sign Up</Link></a>
        </li>
      </ul>            
          </nav>

        </header>
        </>
    )
}

const Footer = () =>{
return(
  <>
  <h1>Footer</h1>
  </>
)
}

export { Nav , Footer }

