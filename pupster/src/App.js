import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Discover from "./components/pages/Discover";
import About from "./components/pages/About";
import Search from "./components/pages/Search";


const App = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>;

export default App;
