import "./SignUp.css"
import {Link} from "react-router-dom"

const SignUp = () => {
    return (
        <div className="signup">
            <form>
                <h1>Sign up</h1>
                <input type="text" name="email" value="" placeholder="example@email.com"/>
                <input type="password" name="password" value="" placeholder="*********"/>
                <button type="submit">Sign up</button>
                <p>By continuing, you agree to The Terms of Service and Privacy Statement.</p>
            </form>
            <div className="line"></div>
            <div className="signedup">
                <p>Have an account?</p>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}

export default SignUp
