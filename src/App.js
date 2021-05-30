import React, { useEffect, useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { db } from './firebase_config';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
import  TodoListItem  from './Todo';

function App() {
  const [todos, setTodo] = useState([])
  const [todoInput, setTodoInput] = useState('')

  useEffect(() => {
    getTodo();
  }, [])//run only on first page open

  // add todo Item
  const addTodo = (e) =>{
    e.preventDefault()
    db.collection("todo").add({
      inProgress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })
    setTodoInput('')
  }

  // get todo Item 
  const getTodo = () => {
    db.collection("todo").onSnapshot((querySnapshot)=>{
      setTodo(
        querySnapshot.docs.map((doc)=>({
          id: doc.id,
          todo: doc.data().todo,
          inProgress: doc.data().inProgress,
        }))
      )
    })
  }
 

  return (
    <div className="App" 
      style={{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div>
        <h1 style={{textAlign:"center"}}>TodoApp</h1>
        <form>
          <TextField id="standard-basic"
          label="Add an Item" 
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          style={{maxWidth:"300px", width:"90vw"}} />
          <Button type="submit" className="btn" variant="contained" onClick={addTodo} style={{marginTop: "10px", marginLeft: "10px"}}>Submit</Button>
        </form>

        {/*display todo list items */}
        {/*<div>*/}
          {todos.map((todo)=>(
            <TodoListItem
            todo={todo.todo}
            inProgress={todo.inProgress}
            id={todo.id}
          />
            ))
          } 
      </div>
    </div>
  );
}

export default App;
