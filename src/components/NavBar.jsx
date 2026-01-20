import { Link } from "react-router-dom";
import '../css/NavBar.css'

const NavBar = () => {
    return ( 
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to='/'>MovieApp</Link>
        </div>
        <div className="nav-links">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/favorites' className="nav-link">Favorites</Link>
        </div>
    </nav> );
}
 
export default NavBar;