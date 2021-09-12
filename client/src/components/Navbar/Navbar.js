import {Link, useHistory} from "react-router-dom"
import logo from "../../logo.svg"
import "./Navbar.css"

const Navbar = ({isLoggedIn, setLoggedIn}) => {
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault()
        setLoggedIn(false)
        sessionStorage.clear()
        history.push("/")
    }

    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" height="60px" width="60px" /></Link>
            {isLoggedIn
            ?<ul>
                <Link to="/signup" style={{background:"#00474B", borderRadius: "45px", color: "#FFF", padding: "10px 15px"}}><li>Create Rooms</li></Link>
                <button onClick={(e)=>logout(e)}><li style={{color: "#D14343"}}>Logout</li></button>
            </ul>:<ul style={{width: "13vw"}}>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup" style={{background:"#00474B", borderRadius: "45px", color: "#FFF", padding: "10px 15px"}}><li>Get started</li></Link>
            </ul>}
        </nav>
    )
}

export default Navbar
