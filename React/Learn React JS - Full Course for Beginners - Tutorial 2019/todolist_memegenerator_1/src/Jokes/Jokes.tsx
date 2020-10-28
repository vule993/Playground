import React from 'react';
import styles from './Jokes.module.css';

import Joke from "./Joke/Joke"
import AllJokes from "../Data/Jokes"

const Jokes: React.FC = () => {
  let addEvenClass = (id:number)=>(id % 2 === 0)?styles.even: styles.odd
  let mappedJokes = AllJokes.map((joke) => <div key={joke.id} className={addEvenClass(joke.id)}><Joke question={joke.question} punchline={joke.punchline} /></div>)
  return (
    <div className={styles.Jokes} data-testid="Jokes">
      <h1>Jokes</h1>
      <hr></hr>
      {mappedJokes}
    </div>
  )
};

export default Jokes;
