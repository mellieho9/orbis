import "./SignUp.css"
import {Link, useHistory} from "react-router-dom"
import {ArrowRightIcon} from "evergreen-ui"
import { useState } from "react"
import axios from 'axios'
import logo from "../../assets/images/ORBIS.png"
import calendar from "../../assets/images/calendar.svg"
import timer from "../../assets/images/timer.svg"
import trophy from "../../assets/images/trophy.svg"

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
        <div className="signupParent">
        <div className="signupLeft">
            <div className="leftText">
                <img src={timer} alt="timer icon" width="80px" height="80px"/>
                <p>Using the Pomodoro Timer, you can pace out your work in manageable intervals</p>
            </div>
            <div className="leftText">
                <img src={calendar} alt="calendar icon" width="80px" height="80px"/>
                <p>Create a room, set background music, and invite your friends over from your DREAM study session</p>
            </div>
            <div className="leftText">
                <img src={trophy} alt="trophy icon" width="80px" height="80px"/>
                <p>Want straight As? Check out out motivation corner for images and videos to help you through!</p>
            </div>

        </div>
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
        </div>
    )
}

export default SignUp
