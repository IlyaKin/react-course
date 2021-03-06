import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = ()=>{
    return(

            <nav className={cl.nav}>
                <div>
                    <NavLink to="/profile" className={data=>data.isActive?cl.activeLink:cl.item}>Home</NavLink>
                </div>
                <div>
                    <NavLink to="/about" className={data=>data.isActive?cl.activeLink:cl.item}>About</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={data=>data.isActive?cl.activeLink:cl.item}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={data=>data.isActive?cl.activeLink:cl.item}>Feed</NavLink>
                </div>
                <div>
                    <NavLink to="/friends" className={data=>data.isActive?cl.activeLink:cl.item}>Friends</NavLink>
                </div>
                <div>
                    <NavLink to="/users" className={data=>data.isActive?cl.activeLink:cl.item}>Users</NavLink>
                </div>
            </nav>

    )
}
export default Navbar;