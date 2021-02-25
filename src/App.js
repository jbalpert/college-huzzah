import { React } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Colleges from "./components/pages/Colleges";
import SignUp from "./components/pages/SignUp";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/colleges" component={Colleges}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
