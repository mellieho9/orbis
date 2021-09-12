import {Link, useHistory} from "react-router-dom"
import logo from "../../assets/images/ORBIS.png"

const LoggedInNav = ({setLoggedIn}) => {
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault()
        setLoggedIn(false)
        sessionStorage.clear()
        history.push("/")
    }

    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" height="50px" width="143px" /></Link>
            <ul>
                <Link to="/chat" style={{background:"#00474B", borderRadius: "45px", color: "#FFF", padding: "10px 15px"}}><li>Create Rooms</li></Link>
                <button onClick={(e)=>logout(e)}><li style={{color: "#D14343"}}>Logout</li></button>
            </ul>
        </nav>
    )
}

export default LoggedInNav