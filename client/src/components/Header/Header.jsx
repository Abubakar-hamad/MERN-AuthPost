import {FaSignInAlt ,FaSignOutAlt , FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import {useSelector ,useDispatch} from 'react-redux'
import { logOut, reset } from '../../redux/Slice/Auth/Authslice'





function Header() {
    const dispatch = useDispatch() ; 
    const navigate = useNavigate() ; 
    const {isLoading  , user} = useSelector(state => state.auth)
    const onLogout = ()=>{
        dispatch(logOut())
        dispatch(reset())
        navigate('/')
    }
    return (
    
    <header>
        <div className="log">
            <Link to='/'>Home</Link>
        </div>
       
        <ul>
        {user ? (
            <>
            <li>My Post</li>
     
            <li>
                <Link to='/me'>{user.name}</Link>
            </li>
            <li>
             <button onClick={onLogout} > <FaSignOutAlt/> signout</button>
            </li>
            </>
        ) : (
        <>
        <li>
        <Link to='/login' > <FaSignInAlt/> login</Link>
        </li>
        <li>
        <Link to='/register' > <FaUser/> register</Link>
        </li>
        </>
        )}
            
            
           
           

        </ul>
      
    </header>
  )
}

export default Header