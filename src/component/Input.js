import React from 'react'
import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Input() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const deleteHandler =()=>{
      // setTodos(todos.filter)(el =>el.id !== todo.id)
    }
    
    
 return (
  
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      
      </div>
      <div className="subHeading">
        <br />
        <h3>Whoop, it's {new Date().toDateString()}  🌝 ☕ </h3><br></br>
        <h3>and time is {new Date().toLocaleTimeString()}</h3><br></br>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((value) => {

          return (<div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked);
                console.log(value);
                setTodos(todos.filter(value2=>{
                  if(value2.id===value.id){
                   value2.status=e.target.checked
                  }
                  return value2
                }))
              }}
              value={value.status} type="checkbox" name="" id="" />
              <p>{value.text}</p>
            </div>
            <div className="right">
              <i onClick={deleteHandler} className="fas fa-times"></i>
              <i  class="fa fa-heart" ></i>            

            </div>
          </div>
          
          )
        })}
       
       {todos.map((obj)=>{
        if(obj.status){
          

          return(
            <div className='done'>
              <h2>Finished Tasks</h2>
          <li>{obj.text}</li>
        
          </div>
          )}
        return null
       })}

      </div>
    </div>
      );
}

export default Input