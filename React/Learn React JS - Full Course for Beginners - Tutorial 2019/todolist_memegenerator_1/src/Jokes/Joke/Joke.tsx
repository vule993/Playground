import React, {FC} from 'react';
import styles from './Joke.module.css';

interface JokeProps{
  question?: string;
  punchline?: string;
}

const Joke: React.FC<JokeProps> = (props: JokeProps = { question: "", punchline : ""}) => (
  <div className={styles.Joke} data-testid="Joke">
    { props.question !== undefined && <div>Question: {props.question}</div> }
    <span>-{props.punchline}</span>
  </div>
);

export default Joke;
