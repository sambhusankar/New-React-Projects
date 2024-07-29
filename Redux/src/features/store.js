import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todo:[{id:0, message: "here is your message"}],

}
const slice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo(state, action){
            state.todo.push(action.payload)
        },
        removeTodo(state, action){
            state.todo.filter(todo => todo.id != action.payload)
        }
    }
}

)
