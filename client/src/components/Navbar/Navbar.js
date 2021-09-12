import {Link} from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/images/ORBIS.png"

const Navbar = () => {

    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" height="50px" width="143px" /></Link>
            <ul style={{width: "13vw"}}>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup" style={{background:"#00474B", borderRadius: "45px", color: "#FFF", padding: "10px 15px"}}><li>Get started</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar
