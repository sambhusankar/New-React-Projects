import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo,updateTodo} from '../features/todoSlice'
function Todos(){
    const todos =  useSelector(state => state.todos)
    const dispatch = useDispatch()
    return(
       <>
       {todos.map((todo)=>{
            return(
              <li key={todo.id}> {todo.text} 
              <button
               onClick = {()=>dispatch(removeTodo(todo.id))}
              >  X</button>
              <button onClick = {()=>dispatch(updateTodo({id:todo.id,text:'updated text'}))} >update</button>
              </li>  
              
            )
       })}
       
       </>
    )
}
export default Todos