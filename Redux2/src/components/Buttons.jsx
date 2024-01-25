import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Credit,Debit} from '../features/amountSlice'
function Button(){
    const dispatch = useDispatch()
    const CreditHandler = ()=>{
        dispatch(Credit())
    }
    const DebitHandler = ()=>{
        dispatch(Debit())
    }
    return(
        <>
        <button onClick = {CreditHandler}> + </button>
        <button onClick = {DebitHandler}> - </button>
        </>
    )
}
export default Button