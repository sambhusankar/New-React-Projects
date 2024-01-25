
import {createSlice} from '@reduxjs/toolkit'

const initialState = {value:0}

const slicer = createSlice({
    name:'counter',
    initialState,
    reducers:{
    Credit:(state)=>{
        state.value++
    },
    Debit:(state)=>{
        state.value--
    }
}

})
export const { Credit , Debit}  = slicer.actions
export default slicer.reducer