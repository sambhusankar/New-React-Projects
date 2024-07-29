import { useState,useEffect } from 'react'

import Input from './Input'
import useCurrencyInfo from './currency_conv'


function App() {
   console.log(useCurrencyInfo("inr"))
   const [from,setFrom] = useState('usd')
   const [to,setTo] = useState('inr')
   const [amount,setAmount] = useState(0)
   const [convertedAmount,setConvertedAmount] = useState(0)
   const obj = useCurrencyInfo(from)
   const curr_list=Object.keys(obj)
   
   const onAmtChg =(e)=>{
      setAmount(e.target.value)
    
   }
   
   const onCurrChg1 =(e)=>{
    setFrom(e.target.value) 
  }
  const onCurrChg2 =(e)=>{
    setTo(e.target.value) 
  }
  const onSWag = ()=>{
   setFrom(to)
   setTo(from)
   setAmount(convertedAmount)
   setConvertedAmount(amount)
  }
  const convert = () => {
    setConvertedAmount(amount*obj[to])
  }
  return (
    <div className=" h-screen w-full text-center mt-0 pt-5">
    <div className="h-fit w-3/5 bg-white/50 shadow-xl rounded-lg text-center mx-auto mt-16 py-5 backdrop-blur-sm border-white border-2">
      <Input currencies={curr_list} amount={amount} onAmountChange={onAmtChg} onCurrencyChange={onCurrChg1} label="from" option={from}/>
      <button className="block bg-blue-500 rounded text-white mx-auto px-2 text-xl z-10"
      onClick={onSWag}>swap  <i class="fa-solid fa-right-left fa-rotate-90"></i></button>
      <Input currencies={curr_list} amount={convertedAmount} onCurrencyChange={onCurrChg2} label="to" option={to}/>
        <button className="bg-blue-500 px-5 mt-3 text-xl text-white rounded-lg pb-1"
onClick={convert}
        >covert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </div>
  )
}

export default App
