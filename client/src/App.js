import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Signup from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
