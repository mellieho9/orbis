import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"
import Landing from "./components/Landing/Landing"
import {useState} from "react"
import Logout from "./components/Logout/Logout"
import Home from "./components/Home/Home"
import Chat from "./components/Chat/Chat";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <Router>
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route exact path="/">
          <Landing/>
          <Home/>

        </Route>
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} setLogInEmail={setEmail}/>
        </Route>
        <Route path="/signup">
          <Signup setLoggedIn={setLoggedIn} setLogInEmail={setEmail}/>
        </Route>
        <Route path = "/chat">
          <Chat/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
