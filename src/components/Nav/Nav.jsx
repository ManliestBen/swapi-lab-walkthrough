import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
  return ( 
    <nav>
      <NavLink to='/ships'>STAR WARS STARSHIPS</NavLink>
    </nav>
  )
}

export default Nav