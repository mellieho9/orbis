import {Link} from "react-router-dom"
import logo from "../../logo.svg"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" height="60px" width="60px" />
            <ul>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Get started</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
