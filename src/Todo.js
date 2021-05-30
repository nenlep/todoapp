import React from 'react';
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";


export default function TodoListItem({ todo, inProgress, id }) {
  // change inProgress value
function toggleInProgress(){
  db.collection("todo").doc(id).update({
    inProgress: !inProgress
  })
}
// delete todo
function deleteTodo(){
  db.collection("todo").doc(id).delete()
}




return (
    <div style={{display: "flex"}}>
    <ListItem>
      <ListItemText primary={todo} secondary={inProgress? "In Progress" : "Completed"}/>
    </ListItem>
    <Button onClick={toggleInProgress}>{inProgress? "DONE" : "UNDONE"}</Button>
    <Button onClick={deleteTodo}>X</Button>
  
    </div>
  )
}

