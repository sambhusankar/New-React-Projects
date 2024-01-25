import React from  'react'
import { useSelector } from 'react-redux'
function Amounts(){
    const amount = useSelector(state => state.value)
    return(
        <div>{amount}</div>
    ) 
}
export default Amounts