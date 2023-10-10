import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
  return ( 
    <nav>
      <NavLink to='/ships'>Star wars starships</NavLink>
    </nav>
  )
}

export default Nav