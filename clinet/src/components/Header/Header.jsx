import {FaSignInAlt ,FaSignOutAlt , FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header>
        <div className="log">
            <Link to='/'>Home</Link>
        </div>
        <ul>
            <li>
                <Link to='/login' > <FaSignInAlt/> login</Link>
            </li>
            
            <li>
                <Link to='/login' > <FaSignOutAlt/> signout</Link>
            </li>

            <li>
                <Link to='/register' > <FaUser/> register</Link>
            </li>

        </ul>
      
    </header>
  )
}

export default Header