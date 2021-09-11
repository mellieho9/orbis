import "./Login.css"
import {Link} from "react-router-dom"

const Login = () => {
    return (
      
 <div className = "loginWrapper">
           <div className = "login">
            <h1>Orbis</h1>
            <h2>Enter motto here</h2>
            <input type="text" name="email" value=""/>
            <input type="password" name="password" value=""/>
            <button>Login</button>
            
            <div className="line">

            </div>

            <div className = "notLogin">
                <p>No account?</p>
                <Link to = "/signup">Sign Up</Link>

            </div>
        </div>
 </div>

    )
}

export default Login
