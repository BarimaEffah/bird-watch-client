import React from "react";
import Register from "./views/Register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
