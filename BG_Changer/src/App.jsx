import { useState } from 'react'
function App() {
  let [color,SetColor] = useState("black");
  

  return (
    <>
      <div className="h-96 w-full mt-5" style={{backgroundColor: color}}>
         <div className="fixed bottom-10 flex justify-center gap-5 bg-white px-10 py-2 rounded-xl ">
           <button className="bg-red-500 px-3 py-1 rounded"
onClick={()=> SetColor("red")} >Red</button>
           <button className="bg-yellow-500 px-3 py-1 rounded"
onClick={()=> SetColor("yellow")}>Yellow</button>
           <button className="bg-green-500 px-3 py-1 rounded"
onClick={()=> SetColor("green")}>Green</button>
           <button className="bg-blue-500 px-3 py-1 rounded"
onClick={()=> SetColor("blue")}>Blue</button>
         </div>
      </div>
    </>
  )
}

export default App
