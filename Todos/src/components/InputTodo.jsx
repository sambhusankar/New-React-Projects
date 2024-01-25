import React,{useState} from 'react'
import {useTodo} from '../Context/ContextProvider'
function Input(){
     const {addTodo} = useTodo()
     const [todo,setTodo] =useState('')
     const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo,completed:false})
        setTodo('')

     }
   
    return(
      <form onSubmit={add} className='flex'>
      
      <input className="w-full mt-5 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
       type='text'
        placeholder='your task here..'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
         ></input>
      <button className=" mt-5 rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">add </button>
       </form>
    )
}
export default Input