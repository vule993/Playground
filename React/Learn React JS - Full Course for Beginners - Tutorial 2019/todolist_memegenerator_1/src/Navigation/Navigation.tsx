import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [logged, setLogged] = useState(false);
  let log = () => {
    setLogged(!logged);
  }
  return (
    <div className={styles.Navigation} data-testid="Navigation">
      <ul id="navigation" className={styles.fleft}>
        <li>
          <Link to="/">Home</Link>{""}
          <Link to="/todolist">To do list</Link>{""}
          <Link to="/myinfo">My info</Link>{""}
          <Link to="/jokes">Jokes</Link>{""}
          <Link to="/school">School</Link>{""}
          <Link to="/events">Event handling</Link>{""}
          <Link to="/states">States</Link>{""}
        </li>
      </ul>

      <div className={styles.fright}>
        Cao, ti si {logged? "ulogovan":"izlogovan"}
        {!logged&&<button className="btn btn-success" onClick={log}>Log In</button>}
        {logged&&<button className="btn btn-danger" onClick={log}>Log Out</button>}
      </div>
    </div>
  )
};

export default Navigation;
