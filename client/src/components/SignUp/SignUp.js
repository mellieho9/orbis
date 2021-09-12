import "./SignUp.css"
import {Link, useHistory} from "react-router-dom"
import {ArrowRightIcon} from "evergreen-ui"
import { useState } from "react"
import axios from 'axios'

const SignUp = ({setLoggedIn, setLogInEmail}) => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        const body = {
            "email": email,
            "password": pswd
        }
        const emailToStore = email
        setEmail("")
        setPswd("")
        await axios.post("http://localhost:8080/api/user/register", body)
            .then((res)=> console.log(res.data))
            .catch((err)=> console.log(err))

        await axios.post("http://localhost:8080/api/user/login", body)
            .then((res)=> {
                sessionStorage.setItem("token", res.data)
                setLoggedIn(true)
                setLogInEmail(emailToStore)
                history.push("/")
            })
            .catch((err)=> console.log(err))

    }

    return (
        <div className="signup">
            <form>
                <h1>Sign up</h1>
                <input type="text" name="email" value={email} placeholder="example@email.com" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="password" value={pswd} placeholder="●●●●●●●●●●●●" onChange={(e)=>setPswd(e.target.value)}/>
                <button type="submit" onClick={(e)=>submitHandler(e)}>Sign up</button>
                <p>By continuing, you agree to The Terms of Service and Privacy Statement.</p>
            </form>
            <div className="line"></div>
            <div className="signedup">
                <p>Have an account?</p>
                <Link to="/login">Log In <ArrowRightIcon></ArrowRightIcon></Link>
            </div>
        </div>
    )
}

export default SignUp
