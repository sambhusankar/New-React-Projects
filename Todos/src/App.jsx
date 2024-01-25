import  {ContextProvider} from './Context/ContextProvider'
import Input from './components/InputTodo'
import TodoList from './components/TodoList'

import {useState,useEffect} from 'react' 
function App() {
    const [todos,setTodos ] = useState([])
    const addTodo = (todo)=>{
      
      setTodos(
        (prev)=>[{id:Date.now(),...todo},...prev]
      );
      
    };
    const updateTodo =(id,todo)=>{
          setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
    };
    const deleteTodo=(id)=>{
          setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id !== id )))
    };
    const toggleComplete =(id)=>{
          setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
    }
    useEffect(()=>{
          const todos =JSON.parse(localStorage.getItem('todos'))
          if(todos && todos.length > 0){
            setTodos(todos)
          }
    },[])
    useEffect(()=>{
          localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

  return (
    <ContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className='bg-blue-950 h-screen w-screen text-center px-14'>
           <h1 className='text-white text-5xl pt-4'>Manage your todos</h1>
           <Input />

            {
            todos.map((todo)=>{
                  return <div key ={todo.id}><TodoList todo={todo} /></div>
            })
           } 
     </div>
    </ ContextProvider>
  )
}

export default App
