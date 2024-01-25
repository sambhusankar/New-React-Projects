import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../features/todoSlice'
function AddTodo(){
    const todos = useSelector(state => state.todos)
    const [input,setInput] = useState(todos[0].text)
    const dispatch = useDispatch()
    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return(
        <>
        <form onSubmit ={addTodoHandler}>
            <input type='text'
            placeholder='enter your task here'
            value= {input}
            onChange ={(e)=>setInput(e.target.value)}
            ></input>
            <button>submit</button>
        </form> 
        </>
    )
}
export default AddTodo