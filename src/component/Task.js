import React from 'react'
import Input from './Input'
function Task(props) {
  return (
    <div>
            <h1>  Task Completed</h1>
        
       <p>{props.todos}</p>
      

    </div>
  )
}

export default Task

// {todos.map((obj)=>{
//   if(obj.status){
//     return(
//       <h1>todos{obj.text}</h1>
      
//     )
//   }