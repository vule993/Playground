import React from 'react';
import Todoitem from './Todoitem/Todoitem';
import styles from './Todolist.module.css';
import tododata from "../Data/ToDoData";

const Todolist: React.FC = () => {
  let listItemMappled = tododata.map(task=><Todoitem key={task.id} completed={task.completed} text={task.text}></Todoitem>)
  return (
    <div className={styles.Todolist} data-testid="Todolist">
      <h1>Todolist Component</h1>
      <hr></hr>
      {listItemMappled}

    </div>
  )
};

export default Todolist;
