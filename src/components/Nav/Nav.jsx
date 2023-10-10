import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
  return ( 
    <nav>
      <NavLink to='/ships'>Ship List</NavLink>
    </nav>
  )
}

export default Nav