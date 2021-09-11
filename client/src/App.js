import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"
import Landing from "./components/Landing/Landing"
import {useState} from "react"
<<<<<<< HEAD
import Chat from "./components/Chat/Chat";
=======
import Logout from "./components/Logout/Logout"
>>>>>>> c90e0bb13d3a0b9fd482357f6c9c2d4aa848b4d8

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path="/signup">
          <Signup setLoggedIn={setLoggedIn}/>
        </Route>
<<<<<<< HEAD
        <Route path = "/chat">
          <Chat/>
=======
        <Route path="/logout">
          <Logout/>
>>>>>>> c90e0bb13d3a0b9fd482357f6c9c2d4aa848b4d8
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
