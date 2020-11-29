import React, { useState } from 'react';
import styles from './Todoitem.module.css';

interface ToDoProps{
  id?: number,
  text?: string,
  completed?: boolean,
  deleteMethod?:any
}

const Todoitem: React.FC<ToDoProps> = (props: ToDoProps = {id:0, text: "", completed:false}) => {
  const [completed, setCompleted] = useState(props.completed);
 
  
  //on check change
  let check = () => {
    setCompleted(!completed);
  }
  return (
    <div className={styles.Todoitem} data-testid="Todoitem">
      <input onChange={check} checked = {completed} type="checkbox" name="item-1"></input>
      <span style={{ textDecoration: (completed) ? 'line-through' : 'none' }}>{props.text}</span>
      <button className={"btn btn-success " + styles.fright} onClick={() => props.deleteMethod(props.id)}>Delete</button>
    </div>
  )
};


export default Todoitem;
