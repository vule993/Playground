import React, { useState } from 'react';
import styles from './States.module.css';
import { Button } from 'react-bootstrap';

const States: React.FC = () => {

  const [state, setState] = useState(0);

  return (
    <div className={styles.States} data-testid="States">
      <h1>States component</h1>
      <hr></hr>
      <h3>{state}</h3>
      <button className="btn btn-success" onClick={()=>setState(state+1)}>Increment</button>
    </div>
  );
}

export default States;
