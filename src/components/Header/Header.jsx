import cl from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props)=>{
    return(
            <header className={cl.header}>
                <h2 className={cl.logo}>CONNECT.COM</h2>
               <div className={cl.loginButton}> {props.isAuth ? props.login : <NavLink to='/login' >Login</NavLink>}</div>
            </header>

    )
}
export default Header;