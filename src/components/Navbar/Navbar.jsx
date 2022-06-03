import cl from './Navbar.module.css'


const Navbar = ()=>{
    return(

            <nav className={cl.nav}>
                <div className={cl.item}>
                    <a>Home</a>
                </div>
                <div className={cl.item}>
                    <a>About</a>
                </div>
                <div className={cl.item}>
                    <a>Messages</a>
                </div>
                <div className={cl.item}>
                    <a>Feed</a>
                </div>
            </nav>

    )
}
export default Navbar;