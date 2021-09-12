import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"
import Landing from "./components/Landing/Landing"
import {useState} from "react"
import Home from "./components/Home/Home"
import Chatnew from "./components/Chat/Chatnew"
import LoggedInNav from './components/LoggedInNav/LoggedInNav';

function App() {

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState("")
    return (
        <Router>
            <div className="App">
                {isLoggedIn?<LoggedInNav setLoggedIn={setLoggedIn}/>:<Navbar/>}
                <Switch>
                    <Route exact path="/">
                      {isLoggedIn?<Landing/>:<Home/>}
                    </Route>
                    <Route path="/login">
                        <Login setLoggedIn={setLoggedIn} setLogInEmail={setEmail}/>
                    </Route>
                    <Route path="/signup">
                        <Signup setLoggedIn={setLoggedIn} setLogInEmail={setEmail}/>
                    </Route>
                    <Route path = "/chat">
                        <Chatnew/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
