import React, { useState } from 'react';
import Todoitem from './Todoitem/Todoitem';
import styles from './Todolist.module.css';
import tododata from "../Data/ToDoData";

interface ITodoForm{
  addTodo:any
}
const TodoForm: React.FC<ITodoForm> = (props: ITodoForm) => {
  const [value, setValue] = useState('')
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    if (!value) return
    props.addTodo(value)
    setValue('')
  }
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input onChange={e=>setValue(e.target.value)} value={value} type="text" placeholder="new todo..."></input>
      </form>
    </div>
  )
}



const Todolist: React.FC = () => {
  const [todos, settodos] = useState([...tododata]) 
  
  const addTodo = (text : string) => {
    let newTodos = [...todos, {
      id: 999,
      text: text,
      completed: false
    }]
    settodos(newTodos)
  }
  const deleteTodo = (index : number) => {
    let allTodos = [...todos]
    allTodos.splice(index, 1)
    settodos(allTodos)
  }

  let listItemMappled = todos.map(task=><Todoitem key={task.id} completed={task.completed} text={task.text} deleteMethod={deleteTodo}></Todoitem>)
  
  


  return (
    <div className={styles.Todolist} data-testid="Todolist">
      <h1>Todolist Component</h1>
      <hr></hr>
      <TodoForm addTodo={addTodo} />
      {listItemMappled}

    </div>
  )
};

export default Todolist;
