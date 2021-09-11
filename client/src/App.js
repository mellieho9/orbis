import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"
import Landing from "./components/Landing/Landing"
import {useState} from "react"
import Logout from "./components/Logout/Logout"
import Home from "./components/Home/Home"

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

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
          <Login setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path="/signup">
          <Signup setLoggedIn={setLoggedIn}/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
