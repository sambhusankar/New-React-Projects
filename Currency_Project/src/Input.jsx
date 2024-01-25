import {useState,useEffect} from 'react'

function Input({currencies=[],amount,onAmountChange,onCurrencyChange,label,option}){
   
   return (
   
      <>
      <div className="bg-white h-36 w-3/5 rounded-xl shadow-xl flex  mx-auto  gap-6 items-center">
       
         <label className="relative bottom-12 ml-4" >{label}</label>
       <input type="number"
         value={amount}
         onChange={onAmountChange}
        className="absolute h-12 w-48  bg-transparent outline-none pl-3 text-5xl"></input>
       <select className="absolute right-36  bg-gray-400 rounded outline-none text-xl p-3" 
        onChange={onCurrencyChange} 
        value={option}>
          
       {
        currencies.map((item)=>(
           <option value={item}>
              {item}
           </option>
        ))
          
        }
       </select>
   
      </div>
      </>
            
   )
}

export default Input 
