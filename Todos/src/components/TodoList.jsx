import React,{useState} from 'react'
import {useTodo} from '../Context/ContextProvider'
function TodoList({todo}){
  const [isEditable,setIsEditable] = useState(false)
  const [todoMsg,setTodoMsg] = useState(todo.todo)
  const {updateTodo,deleteTodo,toggleComplete} = useTodo()
  const editTodo = ()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg})
    setIsEditable(false)
  }
  const removeTodo = ()=>{
    deleteTodo(todo.id)
  }
  const toggleCompleted = ()=>{
    toggleComplete(todo.id)
  }
       

    return (
       <div className={` flex border border-black/10 rounded-lg px-3 py-1.5 mt-5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-red-400" : "bg-[#ccbed7]"    }`} >
        <input
          type='checkbox'
          checked ={todo.completed}
          onChange={toggleCompleted}
        ></input>
           <input className={` outline-none ${todo.completed ? "bg-red-400 line-through" : "bg-[#ccbed7]" }  `} type='text' value={todoMsg} onChange={(e)=>{setTodoMsg(e.target.value)}} readOnly={!isEditable}></input>
           <button className='bg-white ml-14' onClick={()=>{isEditable ? editTodo() : setIsEditable(!isEditable)}}>{isEditable ?  '📁' : '🖊️'}</button>
           <button className='bg-white' onClick={removeTodo}
           >❌</button>
       </div>


    )
}


export default TodoList