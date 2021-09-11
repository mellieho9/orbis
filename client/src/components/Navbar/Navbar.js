import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>Get started</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
