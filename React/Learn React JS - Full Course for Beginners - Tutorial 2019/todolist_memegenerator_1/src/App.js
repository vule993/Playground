import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

//components
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home";
import Myinfo from "./Myinfo/Myinfo";
import Todolist from "./Todolist/Todolist";
import Jokes from "./Jokes/Jokes"
import Footer from "./Footer/Footer";
import School from "./School/School";
import EventHandling from "./EventHandling/EventHandling";
import States from "./States/States";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/todolist" component={Todolist} />
          <Route path="/myinfo" component={Myinfo} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/school" component={School} />
          <Route path="/events" component={EventHandling} />
          <Route path="/states" component={States} />
          <Route path="/contact" render={() => <h1>Contact Us</h1>} />
          <Route
            path="/blog"
            children={({ match }) => (
              <li className={match ? "active" : ""}>
                <Link to="/blog">Blog</Link>
              </li>
            )}
          />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
