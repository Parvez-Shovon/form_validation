import { Button, Grid } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
  const [task, setTask]= useState("");
  const [error, setError]= useState(false);
  const [taskList, setTaskList]=useState([]);

  const addTask =()=>{
    if(task.length){
      const previousTask = [...taskList];
      previousTask.push(task);
      setTaskList(previousTask);
    }
    else{
      setError(true);
    }
  };
  const setTaskName=(e)=>{
    setError(false)
    setTask(e.target.value)
  };
  const deleteTask=(task)=>{
    

  };
  const editTask=()=>{

  };

  return (
  <Grid container justifyContent={'center'}>
    <Grid item md={6} container spacing={2}>
      {/* <h3>Form Validation</h3> */}
      <Grid item md={6}>
      <TextField onChange={(e)=>setTaskName(e)}
       fullWidth error={error} 
       id="outlined"
       helperText ={error? "Task name is required" : ""}
       Value={task}/>
      <Button onClick={addTask} variant="contained">Add task</Button>
      </Grid>
      <Grid item md={6}>
        {taskList.map(task=>{
          return (<li>
            {task}
          <button onClick={deleteTask}>Delete</button>
          <button onClick={editTask}>Edit</button>
          </li>)
        })}   
      </Grid>

    </Grid>

  </Grid>
  );
}

export default App;
