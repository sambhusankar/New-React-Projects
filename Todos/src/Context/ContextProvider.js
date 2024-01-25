import {useContext,createContext} from 'react'

const MyContext =createContext({
    todos:[
        {
            id:1,
            todo:'todo message',
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


const useTodo = ()=>useContext(MyContext)
const ContextProvider =MyContext.Provider

export {MyContext,ContextProvider,useTodo}